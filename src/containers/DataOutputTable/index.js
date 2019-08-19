import React, { Component } from 'react';
import './DataOutputTable.css';
import { connect } from 'react-redux';
import modalKeys from '../../utils/dataOutputTableKeys.js';
const uuidv4 = require('uuid/v4')

export class DataOutputTable extends Component {

  render() {
    let { selectedModal } = this.props
    let modalNameForClass;
    let modalNameForKeys;
    let modalTableRowKeys;

    if (
      selectedModal === 'Laboratory Data' || 
      selectedModal === 'Input/Output' || 
      selectedModal === 'Vitals' || 
      selectedModal === 'Medications'
    ) {
      modalNameForClass = selectedModal.replace(/\s/g, '-')
      modalNameForKeys = selectedModal.replace(/\s/g, '')
      modalTableRowKeys = modalKeys[modalNameForKeys].map((keyName, index) => {
          return <tr key={uuidv4()}><td key={uuidv4()} className={'table-key index'+index}>{keyName}</td></tr>
      });

      return(
        <table className={'dataot-' + modalNameForClass}>
          <thead>
            <tr>
              <th className='blank-table-head'></th>
            </tr>
          </thead>
          <tbody>
            {modalTableRowKeys}
          </tbody>
        </table>
      )
    } else {
      return(
        <div className={'dataot-' + modalNameForClass}>
          <ul>
            <li>List Items from case in Redux</li>
          </ul>
        </div>
      )
    }
  }
}

export const mapStateToProps = (state) => ({
  selectedModal: state.selectedModal
})

export default connect(mapStateToProps)(DataOutputTable)