import React, { Component } from 'react';
import './DataOutputModal.css';
import { connect } from 'react-redux';

export class DataOutputModal extends Component {
  // constructor(props) {
  //   super(props)
  // }

  render() {
    let { selectedModal } = this.props

    return(
      <div>
        <h1>{selectedModal}!</h1>
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  selectedModal: state.selectedModal
})

export default connect(mapStateToProps)(DataOutputModal)