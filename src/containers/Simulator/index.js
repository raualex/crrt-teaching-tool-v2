import React, { Component } from "react";
import "./Simulator.css";
import { connect } from "react-redux";
import { setCaseOver } from "../../Actions/index.js";
import { setSelectedModal } from "../../Actions/selection-actions";
import {
  calculateLabData,
  setInputOutputData
} from "../../Actions/calculationActions";
import {
  recordHourlyTimestamp,
  submitOrder,
  setTime,
  setTimeBetweenOrders,
  validateTimeBetweenOrders,
  addResultsMessagesToOrder
} from "../../Actions/ordersActions";
import { addMedications } from "../../Actions/medication-actions";
import { addVitals } from "../../Actions/vitals-actions";
import DataOutputModal from "../DataOutputModal";
import OrdersModal from "../OrdersModal";
import OrderResultsContainer from "../../components/OrderResultsContainer";
import {
  labsInitial,
  inputOutputInitial
} from "../../utils/initialSpreadsheetData.js";
import {
  labsResetValues,
  inputOutputResetValues,
  timeResetValues
} from "../../utils/resetValues.js";

export class Simulator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showOrdersModal: false,
      btnClicked: ""
    };
  }

  componentDidMount() {
    const { selectedCase, calculateLabData, setInputOutputData } = this.props;

    if (selectedCase.id === 1 || selectedCase.id === 2) {
      calculateLabData(labsInitial[selectedCase.id]);
      setInputOutputData(inputOutputInitial[selectedCase.id]);
    } else {
      return;
    }
  }

  componentDidUpdate(prevProps) {
    const { orders } = this.props;
    // Typical usage (don't forget to compare props):
    if (orders !== prevProps.orders) {
      /* For each order, add its results messages */
      // this.checkCurrentOrderResults()
    }
  }

  handleClick = event => {
    let { name } = event.target;
    const { selectedModal, setSelectedModal } = this.props;

    if (selectedModal === "") {
      setSelectedModal(name);
      this.setState({ btnClicked: name });
    } else if (selectedModal === name) {
      setSelectedModal("");
      this.setState({ btnClicked: "" });
    } else {
      setSelectedModal(name);
      this.setState({ btnClicked: name });
    }
  };

  handleCaseReset = () => {
    let {
      submitOrder,
      selectedCase,
      calculateLabData,
      setInputOutputData,
      recordHourlyTimestamp,
      setTime,
      setTimeBetweenOrders
    } = this.props;
    console.log("LABS: ", labsResetValues[selectedCase.id]);
    console.log("I/O: ", inputOutputResetValues[selectedCase.id]);
    calculateLabData(labsResetValues[selectedCase.id]);
    setInputOutputData(inputOutputResetValues[selectedCase.id]);
    recordHourlyTimestamp([]);
    setTime(timeResetValues);
    setTimeBetweenOrders(0);
    submitOrder("reset");
  };

  toggleOrdersModal = event => {
    if (event) {
      event.preventDefault();
    }
    this.setState({ showOrdersModal: !this.state.showOrdersModal });
  };

  getOrderResultsMessages = () => {
    const { resultsMessages, hourlyTimestamps } = this.props;
    return resultsMessages.map(order => {
      const { timeStamp, messages } = order;
      return {
        timeStamp,
        messages
      };
    });
  };

  render() {
    const {
      selectedModal,
      selectedCase,
      location,
      history,
      hourlyTimestamps
      // resultsMessages,
      // orders
    } = this.props;
    const { showOrdersModal, btnClicked } = this.state;
    let timeForTitle;

    if (!selectedCase.id) {
      location.pathname = "/select_a_case";
      history.push("/select_a_case");
    }

    if (hourlyTimestamps.length === 2) {
      timeForTitle = "10:00 - Day 1";
    } else {
      timeForTitle = hourlyTimestamps[hourlyTimestamps.length - 1];
    }

    if (selectedModal === "") {
      return (
        <div className="Simulator">
          <header className="simulator-header">
            <h1 className="CRRT-title">CRRT SIMULATOR v.2</h1>
            <div className="form-buttons-container">
              <div className="CRRT-subtitle-container">
                <h2 className="CRRT-subtitle">
                  Case Selected: {selectedCase.id}
                </h2>
                <h2 className="CRRT-subtitle">Time: {timeForTitle}</h2>
              </div>
              <button
                className="orders-btn header-btn"
                onClick={event => this.toggleOrdersModal(event)}
              >
                Orders
              </button>
              <button className="crrt-display-btn header-btn">
                CRRT Display
              </button>
              <button
                className="restart-case-btn header-btn"
                onClick={this.handleCaseReset}
                disabled={showOrdersModal === true}
              >
                Restart Case
              </button>
            </div>
          </header>
          {showOrdersModal === true && (
            <OrdersModal
              closeOrdersModal={event => this.toggleOrdersModal(event)}
            />
          )}
          {showOrdersModal === false && (
            <div className="dataOutputContainer">
              <div className="modalBtnContainer">
                <button
                  name="History of Present Illness"
                  onClick={event => this.handleClick(event)}
                  className={
                    btnClicked === "History of Present Illness"
                      ? "btn-active"
                      : "data-output-btn"
                  }
                >
                  History of Present Illness
                </button>
                <button
                  name="Input/Output"
                  onClick={event => this.handleClick(event)}
                  className={
                    btnClicked === "Input/Output"
                      ? "btn-active"
                      : "data-output-btn"
                  }
                >
                  Input/Output
                </button>
                <button
                  name="Vitals"
                  onClick={event => this.handleClick(event)}
                  className={
                    btnClicked === "Vitals" ? "btn-active" : "data-output-btn"
                  }
                >
                  Vitals
                </button>
                <button
                  name="Laboratory Data"
                  onClick={event => this.handleClick(event)}
                  className={
                    btnClicked === "Laboratory Data"
                      ? "btn-active"
                      : "data-output-btn"
                  }
                >
                  Laboratory Data
                </button>
                <button
                  name="Medications"
                  onClick={event => this.handleClick(event)}
                  className={
                    btnClicked === "Medications"
                      ? "btn-active"
                      : "data-output-btn"
                  }
                >
                  Medications
                </button>
                <button
                  name="Imaging"
                  onClick={event => this.handleClick(event)}
                  className={
                    btnClicked === "Imaging" ? "btn-active" : "data-output-btn"
                  }
                >
                  Imaging
                </button>
                <button
                  name="Physical Exam"
                  onClick={event => this.handleClick(event)}
                  className={
                    btnClicked === "Physical Exam"
                      ? "btn-active"
                      : "physical-exam-output-btn"
                  }
                >
                  Physical Exam
                </button>
              </div>
              <OrderResultsContainer
                orderResults={this.getOrderResultsMessages()}
              />
            </div>
          )}
        </div>
      );
    } else {
      return (
        <div className="Simulator">
          <header className="simulator-header">
            <h1 className="CRRT-title">CRRT SIMULATOR v.2</h1>
            <div className="form-buttons-container">
              <div className="CRRT-subtitle-container">
                <h2 className="CRRT-subtitle">
                  Case Selected: {selectedCase.id}
                </h2>
                <h2 className="CRRT-subtitle">Time: {timeForTitle}</h2>
              </div>
              <button
                className="orders-btn header-btn"
                onClick={event => this.toggleOrdersModal(event)}
              >
                Orders
              </button>
              <button className="crrt-display-btn header-btn">
                CRRT Display
              </button>
              <button
                className="restart-case-btn header-btn"
                onClick={this.handleCaseReset}
                disabled={showOrdersModal === true}
              >
                Restart Case
              </button>
            </div>
          </header>
          {showOrdersModal === true && (
            <OrdersModal
              closeOrdersModal={event => this.toggleOrdersModal(event)}
            />
          )}

          {showOrdersModal === false && (
            <div className="dataOutputContainer">
              <div className="modalBtnContainer">
                <button
                  name="History of Present Illness"
                  onClick={event => this.handleClick(event)}
                  className={
                    btnClicked === "History of Present Illness"
                      ? "btn-active"
                      : "data-output-btn"
                  }
                >
                  History of Present Illness
                </button>
                <button
                  name="Input/Output"
                  onClick={event => this.handleClick(event)}
                  className={
                    btnClicked === "Input/Output"
                      ? "btn-active"
                      : "data-output-btn"
                  }
                >
                  Input/Output
                </button>
                <button
                  name="Vitals"
                  onClick={event => this.handleClick(event)}
                  className={
                    btnClicked === "Vitals" ? "btn-active" : "data-output-btn"
                  }
                >
                  Vitals
                </button>
                <button
                  name="Laboratory Data"
                  onClick={event => this.handleClick(event)}
                  className={
                    btnClicked === "Laboratory Data"
                      ? "btn-active"
                      : "data-output-btn"
                  }
                >
                  Laboratory Data
                </button>
                <button
                  name="Medications"
                  onClick={event => this.handleClick(event)}
                  className={
                    btnClicked === "Medications"
                      ? "btn-active"
                      : "data-output-btn"
                  }
                >
                  Medications
                </button>
                <button
                  name="Imaging"
                  onClick={event => this.handleClick(event)}
                  className={
                    btnClicked === "Imaging" ? "btn-active" : "data-output-btn"
                  }
                >
                  Imaging
                </button>
                <button
                  name="Physical Exam"
                  onClick={event => this.handleClick(event)}
                  className={
                    btnClicked === "Physical Exam"
                      ? "btn-active"
                      : "physical-exam-output-btn"
                  }
                >
                  Physical Exam
                </button>
              </div>
              <div className="modal-container">
                <DataOutputModal handleClick={this.handleClick} />
              </div>
            </div>
          )}
        </div>
      );
    }
  }
}

export const mapStateToProps = ({
  selectedModal,
  selectedCase,
  orders,
  resultsMessages,
  hourlyTimestamps
}) => ({
  selectedModal,
  selectedCase,
  orders,
  resultsMessages,
  hourlyTimestamps
});

export const mapDispatchToProps = dispatch => ({
  setCaseOver: bool => dispatch(setCaseOver(bool)),
  submitOrder: order => dispatch(submitOrder(order)),
  setTime: newTime => dispatch(setTime(newTime)),
  setTimeBetweenOrders: TimeBetweenOrders =>
    dispatch(setTimeBetweenOrders(TimeBetweenOrders)),
  validateTimeBetweenOrders: isValid =>
    dispatch(validateTimeBetweenOrders(isValid)),
  addResultsMessagesToOrder: (resultsMessages, id) =>
    dispatch(addResultsMessagesToOrder(resultsMessages, id)),
  addMedications: timeBetweenOrders =>
    dispatch(addMedications(timeBetweenOrders)),
  addVitals: timeBetweenOrders => dispatch(addVitals(timeBetweenOrders)),
  recordHourlyTimestamp: timeStamps =>
    dispatch(recordHourlyTimestamp(timeStamps)),
  setSelectedModal: modal => dispatch(setSelectedModal(modal)),
  calculateLabData: newLabData => dispatch(calculateLabData(newLabData)),
  setInputOutputData: newInputOutput =>
    dispatch(setInputOutputData(newInputOutput))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Simulator);
