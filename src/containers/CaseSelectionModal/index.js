import React, { Component } from 'react';
import './CaseSelectionModal.css';
import { connect } from 'react-redux';

export class CaseSelectionModal extends Component {

  render() {
    return(
      <div>
        <h1>SELECT A CASE, BITCH!</h1>
      </div>
    )
  }
}

export default connect(null, null)(CaseSelectionModal)