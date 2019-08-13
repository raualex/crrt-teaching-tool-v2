import React, { Component } from 'react';
import './DataOutputTable.css';
import { connect } from 'react-redux';

export class DataOutputTable extends Component {

  render() {
    let { selectedModal } = this.props
    let modalNameForClass = selectedModal.replace(/\s/g, '-')

    return(
      <div className={'dataot-' + modalNameForClass}>

      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  selectedModal: state.selectedModal
})

export default connect(mapStateToProps)(DataOutputTable)