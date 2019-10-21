import React, { Component } from "react";
import "./DataOutputModal.css";
import DataOutputTable from "../DataOutputTable";
import { connect } from "react-redux";
import { setSelectedModal } from "../../Actions/selection-actions";
import wrench from "../../utils/settings.png";

export class DataOutputModal extends Component {

  handleClick = () => {
    let { selectedModal, handleClick } = this.props;
    let mockEvent = { target: { name: selectedModal } };

    handleClick(mockEvent);
  };

  render() {
    let { selectedModal, selectedCase } = this.props;

    if (selectedCase.id === 1 || selectedCase.id === 2) {
      return (
        <div className="data-output-modal">
          <div className="dataom-title-container">
            <h1 className="dataom-modal-title">{selectedModal}</h1>
            <button
              className="dataom-x-button"
              onClick={() => this.handleClick()}
            >
              X
            </button>
          </div>
          <div className="dataom-table-container">
            <DataOutputTable />
          </div>
        </div>
      );
    } else {
      return (
        <div className="data-output-modal">
          <div className="dataom-title-container">
            <h1 className="dataom-modal-title">{selectedModal}</h1>
            <button
              className="dataom-x-button"
              onClick={() => this.handleClick()}
            >
              X
            </button>
          </div>
          <div className="dataom-table-container">
          <div className="dataom-under-construction-container">
            <img 
              src={wrench} 
              alt="Under Construction Icon" 
              className="dataom-under-construction-icon"
            />
            <h1 
              className="dataom-under-construction-msg"
            >This Case Simulation is under contsruction</h1>
          </div>
          </div>
        </div>
      );
    }
  }
}

export const mapStateToProps = state => ({
  selectedModal: state.selectedModal,
  selectedCase: state.selectedCase
});

export const mapDispatchToProps = dispatch => ({
  setSelectedModal: () => dispatch(setSelectedModal(""))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DataOutputModal);
