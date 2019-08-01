import React from 'react';
import './DataOutputModal.css';
import { connect } from 'react-redux';

function DataOutputModal(props) {
  let { selectedModal } = props

  return(
    <div>
      <h1>{selectedModal}!</h1>
    </div>
  )
}

export const mapStateToProps = (state) => ({
  selectedModal: state.selectedModal
})

export default connect(mapStateToProps)(DataOutputModal)