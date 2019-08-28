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

  createTableColumnHeaders = () => {
    
  }

  render() {
    let { selectedModal } = this.props
    let modalNameForClass;
    let modalNameForKeys;
    let modalTableRowKeys;
    let rowsNumber = 0; //might not need this
    console.log()

    if (
      selectedModal === 'Laboratory Data' || 
      selectedModal === 'Input/Output' || 
      selectedModal === 'Vitals' || 
      selectedModal === 'Medications'
    ) {
      modalNameForClass = selectedModal.replace(/\s/g, '-')
      modalNameForKeys = selectedModal.replace(/\s/g, '')
      modalTableRowKeys = modalKeys[modalNameForKeys].map((keyName, index) => {
          rowsNumber = rowsNumber + 1 //might not need this
          return <tr key={uuidv4()}><td key={uuidv4()} className={'table-key index'+index}>{keyName}</td>{this.mapArrayValuesForTables(mockReduxOrdersForModal.mockReduxOrdersForModal[modalNameForKeys])}</tr>
      });

      return(
        <table className={'dataot-' + modalNameForClass}>
          <thead>
            <tr>
              <th className='blank-table-head'></th>{/*here, add a function that takes the current time in Redux
               and adds the appropriate number of columns needed, with the incremented up time stamps, based off of 
               the eight hour peroid you are in, via Redux (and correct setTime Redux function to go by 12 hour time
                in 8 hour increments)*/}
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