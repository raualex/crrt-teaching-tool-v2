import React from 'react';
import './Simulator.css';
import { connect } from 'react-redux';
import { setSelectedModal } from '../../Actions/selection-actions';

function Simulator(props) {
  let { setSelectedModal } = props

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
}

export const mapDispatchToProps = (dispatch) => ({
  setSelectedModal: (modal) => dispatch(setSelectedModal(modal))
})

export default connect(null, mapDispatchToProps)(Simulator);