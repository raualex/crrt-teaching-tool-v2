import React, { Component } from 'react';
import './DataOutputTable.css';
import { connect } from 'react-redux';

export class DataOutputTable extends Component {

  render() {
    let { selectedModal } = this.props

    return(
      <div className=''>

      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  selectedModal: state.selectedModal
})

export default connect(null, null)(DataOutputTable)