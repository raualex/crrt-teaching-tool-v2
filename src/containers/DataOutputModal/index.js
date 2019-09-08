import React, { Component } from "react";
import "./DataOutputModal.css";
import DataOutputTable from "../DataOutputTable";
import { connect } from "react-redux";
import { setSelectedModal } from "../../Actions/selection-actions";

export class DataOutputModal extends Component {
  // constructor(props) {
  //   super(props)
  // }

  handleClick = () => {
    let { selectedModal, handleClick } = this.props;
    let mockEvent = { target: { name: selectedModal } };

    handleClick(mockEvent);
  };

  render() {
    let { selectedModal } = this.props;

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
  }
}

export const mapStateToProps = state => ({
  selectedModal: state.selectedModal
});

export const mapDispatchToProps = dispatch => ({
  setSelectedModal: () => dispatch(setSelectedModal(""))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DataOutputModal);
