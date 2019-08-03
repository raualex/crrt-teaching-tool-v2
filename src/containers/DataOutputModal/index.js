import React, { Component } from 'react';
import './DataOutputModal.css';
import { connect } from 'react-redux';
import { setSelectedModal } from '../../Actions/selection-actions';

export class DataOutputModal extends Component {
  // constructor(props) {
  //   super(props)
  // }

  render() {
    let { selectedModal, setSelectedModal } = this.props

    return(
      <div className='data-output-modal'>
        <h1>{selectedModal}!</h1>
        <button
          onClick={() => setSelectedModal()}
        >X</button>
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  selectedModal: state.selectedModal
})

export const mapDispatchToProps = (dispatch) => ({
  setSelectedModal: () => dispatch(setSelectedModal(''))
})

export default connect(mapStateToProps, mapDispatchToProps)(DataOutputModal)