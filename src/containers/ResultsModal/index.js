import React, { Component } from 'react';
import './ResultsModal.css';
import { connect } from 'react-redux';

export class ResultsModal extends Component {
  // constructor(props) {
  //   super(props)
  // }

  render() {
    return (
      <div>
        <h1>CRRT Simulator Results</h1>
      </div>
    )
  }
}

export default connect(null, null)(ResultsModal);