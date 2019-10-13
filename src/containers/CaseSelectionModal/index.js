import React, { Component } from "react";
import "./CaseSelectionModal.css";
import { connect } from "react-redux";
import { selectActiveCase } from "../../Actions/case-actions";

export class CaseSelectionModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      caseNumber: undefined,
      error: ""
    };
  }

  validateCaseNumEntry = () => {
    let { caseNumber, error } = this.state;

    if (caseNumber !== undefined && error === "") {
      console.log(true);
      return true;
    } else {
      console.log(false);
      return false;
    }
  };

  handleChange = event => {
    let { allCases } = this.props;
    let { value } = event.target;
    let candidateValue = parseInt(value);
    let error = "";

    if (candidateValue >= 1 && candidateValue <= allCases.length) {
      error = "";
    } else if (candidateValue > allCases.length || candidateValue === 0) {
      error = `There is no case #${candidateValue}`;
    } else if (isNaN(candidateValue) || candidateValue === undefined) {
      error = `Please enter a valid number`;
    }
    this.setState({
      caseNumber: candidateValue,
      error
    });
  };

  handleClick = event => {
    let { caseNumber } = this.state;
    let { allCases, selectActiveCase, location, history } = this.props;
    let selectedCase;

    event.preventDefault();
    selectedCase = allCases.reduce((acc, patientCase) => {
      if (patientCase.id === caseNumber) {
        acc = patientCase;
      }
      return acc;
    }, {});
    selectActiveCase(selectedCase);
    location.pathname = "/simulator";
    history.push("/simulator");
  };

  printLoadingMessage = () => {
    let { isLoading, allCases } = this.props;

    if (isLoading === true) {
      return <div className='csm-loading-msg'>
        <strong>
          PLEASE WAIT, FETCHING CASES...
        </strong>
      </div>
    } else {
      return <div className='csm-loading-msg'>
        <strong>
          Select a Case number between 1 and {allCases.length}
        </strong>
      </div>
    }
  }

  render() {
    return (
      <div className="csm-main-container">
        <div className="csm-title-container">
          <h1 className="csm-title">Select a Case ID for the Simulator</h1>
        </div>
        <form>
          <div className="csm-input-submit-container">
            <input
              className="csm-input"
              type="text"
              onChange={this.handleChange}
            />
            <button
              className={`${
                this.validateCaseNumEntry()
                  ? "csm-submit-btn-active"
                  : "csm-submit-btn"
              }`}
              onClick={this.handleClick}
              disabled={!this.validateCaseNumEntry()}
            >
              Submit
            </button>
          </div>
          {this.printLoadingMessage()}
          <div className="csm-error-container">{this.state.error}</div>
        </form>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  allCases: state.allCases,
  isLoading: state.isLoading
});

export const mapDispatchToProps = dispatch => ({
  selectActiveCase: selectedCase => dispatch(selectActiveCase(selectedCase))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CaseSelectionModal);
