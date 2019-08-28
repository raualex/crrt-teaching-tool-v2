import React, { Component } from 'react';
import './DataOutputTable.css';
import { connect } from 'react-redux';
import modalKeys from '../../utils/dataOutputTableKeys.js';
import mockReduxOrdersForModal from '../../utils/mockOrders.js';
const uuidv4 = require('uuid/v4')

export class DataOutputTable extends Component {

  //write function that accesses the arrays for each output data in Redux:
  //i.e., each DataOutputTable will have an object in Redux, with each key representing a different row in that modal
  //each key/row name will have a value of an array of numbers, map over that array and print a `<td></td>` 
  //element with that number for every value in the array, and add it to the modalTableRowKeys element in the map below,
  //right after the <td> with the key name in it

  mapArrayValuesForTables = (arr) => {
    return arr.map((outputNum) => {
      return <td className='table-key' key={uuidv4()}>{outputNum}</td>
    })
  }

  createTableColumnHeaders = (arrNum) => {
    let finalArr = []
    for (var i = 0; i < arrNum; i++) {
      finalArr.push(<th key={uuidv4()} className='blank-table-head'>{'Timestamp'}</th>)
    }
    return finalArr
  }

  render() {
    let { selectedModal } = this.props
    let modalNameForClass;
    let modalNameForKeys;
    let modalTableRowKeys;
    let rowsNumber = mockReduxOrdersForModal.mockReduxOrdersForModal['Vitals'].length

    if (
      selectedModal === 'Laboratory Data' || 
      selectedModal === 'Input/Output' || 
      selectedModal === 'Vitals' || 
      selectedModal === 'Medications'
    ) {
      modalNameForClass = selectedModal.replace(/\s/g, '-')
      modalNameForKeys = selectedModal.replace(/\s/g, '')
      modalTableRowKeys = modalKeys[modalNameForKeys].map((keyName, index) => {
          return <tr key={uuidv4()}><td key={uuidv4()} className={'table-key index'+index}>{keyName}</td>{this.mapArrayValuesForTables(mockReduxOrdersForModal.mockReduxOrdersForModal[modalNameForKeys])}</tr>
      });

      return(
        <table className={'dataot-' + modalNameForClass}>
          <thead>
            <tr>
              <th className='blank-table-head'></th>{this.createTableColumnHeaders(rowsNumber)}
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