import React, { Component } from "react";
import "./DataOutputTable.css";
import { connect } from "react-redux";
import modalKeys from "../../utils/dataOutputTableKeys.js";
import mockReduxOrdersForModal from "../../utils/mockOrders.js";
const uuidv4 = require("uuid/v4");

export class DataOutputTable extends Component {
  //write function that accesses the arrays for each output data in Redux:
  //i.e., each DataOutputTable will have an object in Redux, with each key representing a different row in that modal
  //each key/row name will have a value of an array of numbers, map over that array and print a `<td></td>`
  //element with that number for every value in the array, and add it to the modalTableRowKeys element in the map below,
  //right after the <td> with the key name in it

  cleanModalname = modalName => {
    let modalNameArr = modalName.split(" ");
    modalNameArr = modalNameArr.map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
    return modalNameArr.join("");
  };

  mapArrayValuesForTables = arr => {
    return arr.map(outputNum => {
      return (
        <td className="table-key" key={uuidv4()}>
          {outputNum}
        </td>
      );
    });
  };

  createTableColumnHeaders = arrNum => {
    let finalArr = [];
    for (var i = 0; i < arrNum; i++) {
      finalArr.push(
        <th key={uuidv4()} className="blank-table-head">
          {"Timestamp"}
        </th>
      );
    }
    return finalArr;
  };

  createBulletPointsForNonTables = () => {
    let { selectedModal, selectedCase } = this.props;
    let cleanedModalName = this.cleanModalname(selectedModal);
    let selectedCaseKeys = Object.keys(selectedCase);
    let modalTextArray;
    let finalArray;

    cleanedModalName =
      cleanedModalName.charAt(0).toLowerCase() + cleanedModalName.slice(1);

    if (
      selectedCaseKeys.includes(cleanedModalName) &&
      selectedModal === "History of Present Illness"
    ) {
      modalTextArray = Object.entries(
        JSON.parse(selectedCase[cleanedModalName])
      );
    } else if (
      selectedCaseKeys.includes(cleanedModalName) &&
      selectedModal === "Physical Exam"
    ) {
      modalTextArray = Object.entries(
        JSON.parse(selectedCase[cleanedModalName])
      );
    } else if (
      selectedCaseKeys.includes(cleanedModalName) &&
      selectedModal === "Imaging"
    ) {
      modalTextArray = JSON.parse(selectedCase[cleanedModalName]);
    }

    finalArray = this.printFinalArray(modalTextArray);
    return finalArray;
  };

  printFinalArray = arr => {
    let { selectedModal } = this.props;

    if (
      selectedModal === "History of Present Illness" ||
      selectedModal === "Physical Exam"
    ) {
      return arr.map(textForBulletPoint => {
        return (
          <li key={uuidv4()} className="dataot-line-item">
            <strong>{textForBulletPoint[0]}:</strong> {textForBulletPoint[1]}
          </li>
        );
      });
    } else {
      return arr.map(textForBulletPoint => {
        return (
          <li key={uuidv4()} className="dataot-line-item">
            {textForBulletPoint}
          </li>
        );
      });
    }
  };

  render() {
    let { selectedModal, labData } = this.props;
    let modalNameForClass = selectedModal.replace(/\s/g, "-");
    let modalNameForKeys;
    let modalTableRowKeys;
    let rowsNumber =
      mockReduxOrdersForModal.mockReduxOrdersForModal["Vitals"].length;

    if (
      selectedModal === "Input/Output" ||
      selectedModal === "Vitals" ||
      selectedModal === "Medications"
    ) {
      modalNameForKeys = selectedModal.replace(/\s/g, "");
      modalTableRowKeys = modalKeys[modalNameForKeys].map((keyName, index) => {
        return (
          <tr key={uuidv4()}>
            <td key={uuidv4()} className={"table-key index" + index}>
              {keyName}
            </td>
            {this.mapArrayValuesForTables(
              mockReduxOrdersForModal.mockReduxOrdersForModal[modalNameForKeys]
            )}
          </tr>
        );
      });

      return (
        <table className={"dataot-" + modalNameForClass}>
          <thead>
            <tr>
              <th className="blank-table-head"></th>
              {this.createTableColumnHeaders(rowsNumber)}
            </tr>
          </thead>
          <tbody>{modalTableRowKeys}</tbody>
        </table>
      );
    } else if (selectedModal === "Laboratory Data") {
      modalNameForKeys = selectedModal.replace(/\s/g, "");
      modalTableRowKeys = modalKeys[modalNameForKeys].reduce((acc, keyName, index) => {
        let keyNoSpaces = keyName.replace(/\s/g, "")
        let newKeyName;

        if (
          keyNoSpaces === 'BUN' || 
          keyNoSpaces === 'WBC' || 
          keyNoSpaces === 'pH' || 
          keyNoSpaces === 'PC02'
        ) {
          newKeyName = keyNoSpaces.toLowerCase()
        } else {
          newKeyName = keyNoSpaces.charAt(0).toLowerCase() + keyNoSpaces.slice(1)
        }

        if (labData[newKeyName]) {
          acc.push(
            <tr key={uuidv4()}>
              <td key={uuidv4()} className={"table-key index" + index}>
               {keyName}
              </td>
              {this.mapArrayValuesForTables(
                labData[newKeyName]
                // mockReduxOrdersForModal.mockReduxOrdersForModal[modalNameForKeys]
              )}
            </tr>
          );
        }
        return acc
      }, []);
console.log(modalTableRowKeys)
      return (
        <table className={"dataot-" + modalNameForClass}>
          <thead>
            <tr>
              <th className="blank-table-head"></th>
              {this.createTableColumnHeaders(rowsNumber)}
            </tr>
          </thead>
          <tbody>{modalTableRowKeys}</tbody>
        </table>
      );
    } else {
      return (
        <div className={"dataot-" + modalNameForClass}>
          <ul>{this.createBulletPointsForNonTables()}</ul>
        </div>
      );
    }
  }
}

export const mapStateToProps = state => ({
  selectedModal: state.selectedModal,
  selectedCase: state.selectedCase,
  labData: state.labData
});

export default connect(mapStateToProps)(DataOutputTable);
