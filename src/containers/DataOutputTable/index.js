import React, { Component } from 'react';
import './DataOutputTable.css';
import { connect } from 'react-redux';
import modalKeys from '../../utils/dataOutputTableKeys.js';
const uuidv4 = require('uuid/v4')

export class DataOutputTable extends Component {

  render() {
    let { selectedModal } = this.props
    let modalNameForClass = selectedModal.replace(/\s/g, '-')
    let modalNameForKeys = selectedModal.replace(/\s/g, '')
    let modalTableRowKeys = modalKeys[modalNameForKeys].map((keyName) => {
        return <tr key={uuidv4()}><td key={uuidv4()}>{keyName}</td></tr>
    });

    return(
      <table className={'dataot-' + modalNameForClass}>
        <tbody>
          {modalTableRowKeys}
        </tbody>
      </table>
    )
  }
}

export const mapStateToProps = (state) => ({
  selectedModal: state.selectedModal
})

export default connect(mapStateToProps)(DataOutputTable)