import React, { Component } from 'react';
import './Simulator.css';
import { connect } from 'react-redux';
import { setSelectedModal } from '../../Actions/selection-actions';
import DataOutputModal from '../DataOutputModal';

export class Simulator extends Component {
  constructor(props) {
    super(props)
  }


  render() {
    let { setSelectedModal, selectedModal } = this.props
  
    if (selectedModal === '') {
      return(
        <div>
          <h1>CRRT SIMULATOR!</h1>
          <div className='modalBtnContainer'>
            <button 
              onClick={() => setSelectedModal('History of Present Illness')}
            >History of Present Illness</button>
            <button 
              onClick={() => setSelectedModal('Input/Output')}
            >Input/Output</button>
            <button 
              onClick={() => setSelectedModal('Vitals')}
            >Vitals</button>
            <button 
              onClick={() => setSelectedModal('Laboratory Data')}
            >Laboratory Data</button>
            <button 
              onClick={() => setSelectedModal('Medications')}
            >Medications</button>
            <button 
              onClick={() => setSelectedModal('Imaging')}
            >Imaging</button>
            <button 
              onClick={() => setSelectedModal('Physical Exam')}
            >Physical Exam</button>
          </div>
        </div>
      )
    } else {
      return (
        <div>
        <h1>CRRT SIMULATOR!</h1>
        <div className='modalBtnContainer'>
          <button 
            onClick={() => setSelectedModal('History of Present Illness')}
          >History of Present Illness</button>
          <button 
            onClick={() => setSelectedModal('Input/Output')}
          >Input/Output</button>
          <button 
            onClick={() => setSelectedModal('Vitals')}
          >Vitals</button>
          <button 
            onClick={() => setSelectedModal('Laboratory Data')}
          >Laboratory Data</button>
          <button 
            onClick={() => setSelectedModal('Medications')}
          >Medications</button>
          <button 
            onClick={() => setSelectedModal('Imaging')}
          >Imaging</button>
          <button 
            onClick={() => setSelectedModal('Physical Exam')}
          >Physical Exam</button>
        </div>
        <DataOutputModal />
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