import React, { Component } from 'react';
import './Simulator.css';
import { connect } from 'react-redux';
import { setSelectedModal } from '../../Actions/selection-actions';
import DataOutputModal from '../DataOutputModal';
import OrdersModal from '../OrdersModal';
import OrderResultsContainer from '../../components/OrderResultsContainer';

export class Simulator extends Component {
	constructor(props) {
		super(props);
		this.state = {
      showOrdersModal: false,
      btnClicked: '',
      ordersResults: [],
      currentTime: 0,
      currentDay: 0,
      amPm: 'AM'
      //each order result will be an object consisting of timestamp and array of messages
		}
  }

  componentDidUpdate(prevProps) {
    const { orders } = this.props;
    // Typical usage (don't forget to compare props):
    if (orders !== prevProps.orders) {
      // this.checkCurrentOrderResults()
    }
  }
  
  // checkCurrentOrderResults = () => {
  //   //sample orderResult
  //   // {
	// 	// 	timeStamp: '10:00 AM - Day 1',
	// 	// 	messages: ['mock message','mock message']
  //   // }
    
  //   //checks current order's input ranges against ranges in utils/orderResultsData.js
  //   //if there are warnings, add them to messages array
  //   //if there are no warnings, add 'CRRT is running smoothly. There were no reported issues since the previous update.' to messages array

  //   //import ordersResults from utils
    
  //   const { orders } = this.props
  //   let messages = [];
  //   const currentOrder = orders[orders.length-1]

  //   for(medication in currentOrder) {
      
  //     const belowRangeMessage = checkResultsForBelowRange(currentOrder, medication)
  //     const aboveRangeMessage = checkResultsForAboveRange(currentOrder, medication)
      
  //     if(belowRangeMessage === aboveRangeMessage) {
  //       messages.push(belowRangeMessage)
  //     } else {
  //       messages.push(belowRangeMessage)
  //       messages.push(aboveRangeMessage)
  //     }
  //   }
  //   const timeStamp = createTimeStamp()
  //   const newOrderResults = {
  //     timeStamp,
  //     messages
  //   }
  //   const ordersResults = [...this.state.orderResults, newOrderResults]
  //   this.setState({ ordersResults })
  // }

  // checkResultsForBelowRange = (currentOrder, medication) => {
  //   const { concerning, urgent, lethal } = currentOrder[medication].dosageRanges.belowRange;
  //   if(currentOrder[medication] < concerning && currentOrder[medication] > urgent) {
  //     return ordersResults[concerning]
  //   } else if (currentOrder[medication] < urgent && currentOrder[medication] > lethal) {
  //     return ordersResults[urgent]
  //   } else if (currentOrder[medication] < lethal){
  //     return ordersResults[lethal]
  //   } else {
  //     return 'CRRT is running smoothly. There were no reported issues since the previous update.'
  //   }
  // }

  // checkResultsForAboveRange = (currentOrder, medication) => {
  //   const { concerning, urgent, lethal } = currentOrder[medication].dosageRanges.aboveRange;
  //   if(currentOrder[medication] > concerning && currentOrder[medication] < urgent) {
  //     return ordersResults[concerning]
  //   } else if (currentOrder[medication] > urgent && currentOrder[medication] < lethal) {
  //     return ordersResults[urgent]
  //   } else if (currentOrder[medication] > lethal){
  //     return ordersResults[lethal]
  //   } else {
  //     return 'CRRT is running smoothly. There were no reported issues since the previous update.'
  //   }
  // }
  
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
    const { showOrdersModal, btnClicked, ordersResults } = this.state
  
    if (selectedModal === '') {
      return(
        <div className='Simulator'>
          <h1 className='CRRT-title'>CRRT SIMULATOR v.2</h1>
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
          <OrderResultsContainer ordersResults={ordersResults}/>
          </div>
          }
        </div>
      )
    } else {
      return (
        <div className='simulator'>
          <h1 className='CRRT-title'>CRRT SIMULATOR v.2</h1>
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
              <div className='modal-container'>
                <DataOutputModal handleClick={this.handleClick} />
              </div>
            </div>
          }
        </div>
      )
    }
  }
}

export const mapStateToProps = ({ selectedModal, orders }) => ({
  selectedModal,
  orders
})

export const mapDispatchToProps = (dispatch) => ({
  setSelectedModal: (modal) => dispatch(setSelectedModal(modal))
})

export default connect(mapStateToProps, mapDispatchToProps)(Simulator);