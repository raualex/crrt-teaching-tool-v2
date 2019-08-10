import React, { Component } from 'react';
import './Simulator.css';
import { connect } from 'react-redux';
import { setSelectedModal } from '../../Actions/selection-actions';
import DataOutputModal from '../DataOutputModal';
import OrdersModal from '../OrdersModal';

export class Simulator extends Component {
	constructor(props) {
		super(props);
		this.state = {
      showOrdersModal: false,
      btnClicked: ''
		}
  }
  
  handleClick = (event) => {
    let { name } = event.target
    const { selectedModal, setSelectedModal } = this.props

    if (selectedModal === '') {
      setSelectedModal(name)
      this.setState({btnClicked: name})
    } else if (selectedModal === name) {
      setSelectedModal('')
      this.setState({btnClicked: ''})
    } else {
      setSelectedModal(name)
      this.setState({btnClicked: name})
    }
  }

  toggleOrdersModal = (event) => {
    event.preventDefault()
    this.setState({ showOrdersModal: !this.state.showOrdersModal})
  }

  render() {
    const { selectedModal } = this.props
    const { showOrdersModal, btnClicked } = this.state
  
    if (selectedModal === '') {
      return(
        <div>
          <h1>CRRT SIMULATOR!</h1>
          <div className='form-buttons-container'>
		      	<button 
		      		className='orders-btn form-btn'
		      		onClick={event => this.toggleOrdersModal(event)}
		      	>Orders</button>
		      	<button className='crrt-display-btn form-btn'>CRRT Display</button>
		      	<button className='restart-case-btn form-btn'>Restart Case</button>
		      </div>
		      { showOrdersModal === true &&
		      	<OrdersModal closeOrdersModal={event => this.toggleOrdersModal(event)}/>
		      }
          { showOrdersModal === false &&
            <div className='modalBtnContainer'>
              <button 
                name='History of Present Illness'
                onClick={(event) => this.handleClick(event)}
                className={btnClicked === 'History of Present Illness' ? 'btn-active' : 'data-output-btn'}
              >History of Present Illness</button>
              <button 
                name='Input/Output'
                onClick={(event) => this.handleClick(event)}
                className={btnClicked === 'Input/Output' ? 'btn-active' : 'data-output-btn'}
              >Input/Output</button>
              <button 
                name='Vitals'
                onClick={(event) => this.handleClick(event)}
                className={btnClicked === 'Vitals' ? 'btn-active' : 'data-output-btn'}
              >Vitals</button>
              <button 
                name='Laboratory Data'
                onClick={(event) => this.handleClick(event)}
                className={btnClicked === 'Laboratory Data' ? 'btn-active' : 'data-output-btn'}
              >Laboratory Data</button>
              <button 
                name='Medications'
                onClick={(event) => this.handleClick(event)}
                className={btnClicked === 'Medications' ? 'btn-active' : 'data-output-btn'}
              >Medications</button>
              <button 
                name='Imaging'
                onClick={(event) => this.handleClick(event)}
                className={btnClicked === 'Imaging' ? 'btn-active' : 'data-output-btn'}
              >Imaging</button>
              <button 
                name='Physical Exam'
                onClick={(event) => this.handleClick(event)}
                className={btnClicked === 'Physical Exam' ? 'btn-active' : 'physical-exam-output-btn'}
              >Physical Exam</button>
            </div>
          }
        </div>
      )
    } else {
      return (
        <div className='simulator'>
          <h1>CRRT SIMULATOR!</h1>
          <div className='form-buttons-container'>
	      	  <button 
	      		  className='orders-btn form-btn'
	      		  onClick={event => this.toggleOrdersModal(event)}
	      	  >Orders</button>
	      	  <button className='crrt-display-btn form-btn'>CRRT Display</button>
	      	  <button className='restart-case-btn form-btn'>Restart Case</button>
	        </div>
	        { showOrdersModal === true &&
	      	  <OrdersModal closeOrdersModal={event => this.toggleOrdersModal(event)}/>
          }
          { showOrdersModal === false &&
            <div className='dataOutputContainer'>
              <div className='modalBtnContainer'>
                <button 
                  name='History of Present Illness'
                  onClick={(event) => this.handleClick(event)}
                  className={btnClicked === 'History of Present Illness' ? 'btn-active' : 'data-output-btn'}
                >History of Present Illness</button>
                <button 
                  name='Input/Output'
                  onClick={(event) => this.handleClick(event)}
                  className={btnClicked === 'Input/Output' ? 'btn-active' : 'data-output-btn'}
                >Input/Output</button>
                <button 
                  name='Vitals'
                  onClick={(event) => this.handleClick(event)}
                  className={btnClicked === 'Vitals' ? 'btn-active' : 'data-output-btn'}
                >Vitals</button>
                <button 
                  name='Laboratory Data'
                  onClick={(event) => this.handleClick(event)}
                  className={btnClicked === 'Laboratory Data' ? 'btn-active' : 'data-output-btn'}
                >Laboratory Data</button>
                <button 
                  name='Medications'
                  onClick={(event) => this.handleClick(event)}
                  className={btnClicked === 'Medications' ? 'btn-active' : 'data-output-btn'}
                >Medications</button>
                <button 
                  name='Imaging'
                  onClick={(event) => this.handleClick(event)}
                  className={btnClicked === 'Imaging' ? 'btn-active' : 'data-output-btn'}
                >Imaging</button>
                <button 
                  name='Physical Exam'
                  onClick={(event) => this.handleClick(event)}
                  className={btnClicked === 'Physical Exam' ? 'btn-active' : 'physical-exam-output-btn'}
                >Physical Exam</button>
              </div>
              <DataOutputModal handleClick={this.handleClick} />
            </div>
          }
        </div>
      )
    }
  }
}

export const mapStateToProps = (state) => ({
  selectedModal: state.selectedModal
})

export const mapDispatchToProps = (dispatch) => ({
  setSelectedModal: (modal) => dispatch(setSelectedModal(modal))
})

export default connect(mapStateToProps, mapDispatchToProps)(Simulator);