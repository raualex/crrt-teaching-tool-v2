import React, { Component } from "react";
import "./OrdersModal.css";
import { connect } from "react-redux";
import {
  submitOrder,
  setTime,
  setTimeBetweenOrders,
  validateTimeBetweenOrders,
  addResultsMessagesToOrder,
  recordHourlyTimestamp
} from "../../Actions/ordersActions";
import { 
  calculateLabData, 
  setInputOutputData 
} from "../../Actions/calculationActions";
import { addMedications } from "../../Actions/medication-actions";
import { addVitals } from "../../Actions/vitals-actions";
import orderDosages from "../../utils/orderDosages.js";
import InputContainer from "../../components/InputContainer";
import ordersResultsMessages from "../../utils/orderResultsData";
import {
  runLabs,
  getMedications,
  getVitals,
  returnInputOutput
} from "../../utils/equationsMaster.js";
const uuidv4 = require("uuid/v4");

export class OrdersModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modality: "Pre-filter CVVH",
      sodium: 0,
      potassium: 0,
      chloride: 0,
      bicarbonate: 0,
      calcium: 0,
      magnesium: 0,
      phosphorous: 0,
      grossUltraFiltration: 0,
      bloodFlowRate: 0,
      replacementFluidFlowRate: 0,
      saline3Percent: false,
      d5W: false,
      sodiumPhosphate15mmol100ml: false,
      anticoagulation: "None",
      otherFluidsBolusValue: 0,
      otherFluidsInfusionValue: 0,
      citrateFlowRate: 0,
      caClInfusionRate: 0,
      readyForSubmission: false,
      dosageErrors: [],
      currentTime: 10,
      currentDay: 1,
      timeBetweenOrders: 8
    };
  }

  async componentDidUpdate(prevProps) {
    const {
      closeOrdersModal,
      calculateLabData,
      orders,
      timeBetweenOrders,
      selectedCase,
      labData,
      addResultsMessagesToOrder,
      time,
      addMedications,
      addVitals,
      recordHourlyTimestamp
    } = this.props;

    if (this.props.orders !== prevProps.orders) {
      let currentOrder = orders[orders.length - 1];
      // const newLabData = compileLabData(
      //   labData,
      //   timeBetweenOrders,
      //   selectedCase.usualWeight,
      //   currentOrder
      // );

      // await calculateLabData(newLabData);

      //LabData
      const newLabData = runLabs(
        orders,
        time,
        timeBetweenOrders,
        selectedCase,
        labData
      );

      const inputOutput = returnInputOutput()
      this.combineInputOutputObjects(inputOutput)

      const resultsMessages = this.checkCurrentOrderResults();
      console.log(newLabData);
      calculateLabData(
        this.addNewLabDataToPreviousLabData(labData, newLabData)
      );

      //Medications
      const medications = getMedications(timeBetweenOrders, selectedCase.id);
      addMedications(medications);

      //Vitals
      const vitals = getVitals(timeBetweenOrders, selectedCase.id);
      addVitals(vitals);

      addResultsMessagesToOrder(resultsMessages, currentOrder);
      this.incrementTimeBetweenOrders();
      recordHourlyTimestamp(
        this.compileHourlyTimestamps(time, timeBetweenOrders)
      );
      closeOrdersModal();
    }
  }

  combineInputOutputObjects = (newInputOutput) => {
    let { inputOutputData, setInputOutputData } = this.props
    let finalInputOutputData = inputOutputData

    finalInputOutputData.citrate = [...finalInputOutputData.citrate, ...newInputOutput.citrate]
    finalInputOutputData.calciumChloride = [...finalInputOutputData.calciumChloride, ...newInputOutput.calciumChloride]
    finalInputOutputData.totalInput = [...finalInputOutputData.totalInput, ...newInputOutput.totalInput]
    finalInputOutputData.ultrafiltration = [...finalInputOutputData.ultrafiltration, ...newInputOutput.ultrafiltration]
    finalInputOutputData.totalOutput = [...finalInputOutputData.totalOutput, ...newInputOutput.totalOutput]
    finalInputOutputData.netInputOutput = [...finalInputOutputData.netInputOutput, ...newInputOutput.netInputOutput]
    finalInputOutputData.cumulativeInputOutput = [...finalInputOutputData.cumulativeInputOutput, ...newInputOutput.cumulativeInputOutput]

    setInputOutputData(finalInputOutputData)
  }

  compileHourlyTimestamps = (time, timeBetweenOrders) => {
    let { currentTime, currentDay } = time;
    let finalTimeStampArray = [];
    let startTime = currentTime;
    let timeCounter = 0;

    while (timeCounter !== timeBetweenOrders) {
      finalTimeStampArray.push(`${startTime}:00 - Day ${currentDay}`);
      if (startTime >= 24) {
        startTime -= 24;
      } else {
        startTime++;
      }
      timeCounter++;
    }
    console.log(finalTimeStampArray, timeCounter, timeBetweenOrders);
    return finalTimeStampArray;
  };

  addNewLabDataToPreviousLabData = (oldLabData, newLabData) => {
    let finalLabData = oldLabData;

    finalLabData.time = [...oldLabData.time, newLabData.time];
    finalLabData.sodium = [...oldLabData.sodium, parseFloat(newLabData.sodium)];
    finalLabData.potassium = [
      ...oldLabData.potassium,
      parseFloat(newLabData.potassium)
    ];
    finalLabData.chloride = [
      ...oldLabData.chloride,
      parseFloat(newLabData.chloride)
    ];
    finalLabData.bicarbonate = [
      ...oldLabData.bicarbonate,
      parseFloat(newLabData.bicarbonate)
    ];
    finalLabData.bun = [...oldLabData.bun, parseFloat(newLabData.bun)];
    finalLabData.creatinine = [
      ...oldLabData.creatinine,
      parseFloat(newLabData.creatinine)
    ];
    finalLabData.calcium = [
      ...oldLabData.calcium,
      parseFloat(newLabData.calcium)
    ];
    finalLabData.phosphorous = [
      ...oldLabData.phosphorous,
      parseFloat(newLabData.phosphorous)
    ];
    finalLabData.filtrationFraction = [
      ...oldLabData.filtrationFraction,
      parseFloat(newLabData.filtrationFraction)
    ];
    finalLabData.ionizedCalcium = [
      ...oldLabData.ionizedCalcium,
      parseFloat(newLabData.ionizedCalcium)
    ];
    finalLabData.magnesium = [
      ...oldLabData.magnesium,
      parseFloat(newLabData.magnesium)
    ];
    finalLabData.ph = [...oldLabData.ph, parseFloat(newLabData.ph)];

    return finalLabData;
  };

  checkCurrentOrderResults = () => {
    //checks current order's Redux labData output against ranges each case, then prints according warning messages stored in utils/orderResultsData.js
    //if there are warnings, add them to messages array
    //if there are no warnings, add 'CRRT is running smoothly. There were no reported issues since the previous update.' to messages array

    // const warningRangeKeys = Object.keys(selectedCase.warningRanges);
    const warningRangesStringified = this.props.selectedCase.warningRanges;
    const warningRanges = JSON.parse(warningRangesStringified);

    const warningRangeKeys = Object.keys(warningRanges);
    const defaultMessage =
      "CRRT is running smoothly. There were no reported issues since the previous update.";
    let messages = [];
    const results = warningRangeKeys.reduce((allMessages, medication) => {
      const belowRangeMessage = this.checkResultsForBelowRange(medication);
      const aboveRangeMessage = this.checkResultsForAboveRange(medication);

      if (
        belowRangeMessage.length &&
        !messages.includes(belowRangeMessage) &&
        !messages.includes(aboveRangeMessage)
      ) {
        messages.push(belowRangeMessage);
      }
      if (
        aboveRangeMessage.length &&
        !messages.includes(aboveRangeMessage) &&
        !messages.includes(belowRangeMessage)
      ) {
        messages.push(aboveRangeMessage);
      }
      return allMessages;
    }, []);

    if (results.length) {
      messages = results;
    } else {
      messages.push(defaultMessage);
    }
    return messages;
  };

  checkResultsForBelowRange = medication => {
    const { labData } = this.props;
    let message = "";
    const warningRangesStringified = this.props.selectedCase.warningRanges;
    const warningRanges = JSON.parse(warningRangesStringified);

    if (labData[medication]) {
      const mostRecentLabResult =
        labData[medication][labData[medication].length - 1];
      const { belowRange } = warningRanges[medication];

      for (let range in belowRange) {
        if (belowRange[range] !== null) {
          if (mostRecentLabResult < belowRange[range]) {
            message = ordersResultsMessages[medication].belowRange[range];
          }
        }
      }
    }
    return message;
  };

  checkResultsForAboveRange = medication => {
    const { labData } = this.props;
    let message = "";
    const warningRangesStringified = this.props.selectedCase.warningRanges;
    const warningRanges = JSON.parse(warningRangesStringified);

    if (labData[medication]) {
      const mostRecentLabResult =
        labData[medication][labData[medication].length - 1];
      const { aboveRange } = warningRanges[medication];

      for (let range in aboveRange) {
        if (aboveRange[range] !== null) {
          if (mostRecentLabResult > aboveRange[range]) {
            message = ordersResultsMessages[medication].aboveRange[range];
          }
        }
      }
    }
    return message;
  };

  handleStringChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value }, () =>
      this.checkForInvalidInputs(name, value)
    );
  };

  handleNumberChange = event => {
    const { name, value } = event.target;
    const parsedValue = parseFloat(value.trim());

    this.setState(
      {
        [name]: parsedValue
      },
      () => this.checkForInvalidInputs(name)
    );
  };

  checkForInvalidInputs = name => {
    const { requiredRanges, replacementFluidDosages } = orderDosages;
    const { dosageErrors } = this.state;
    let invalidEntries = [];
    const staticInputs = [
      "modality",
      "saline3Percent",
      "d5W",
      "sodiumPhosphate15mmol100ml",
      "anticoagulation",
      "readyForSubmission",
      "otherFluidsBolusValue",
      "otherFluidsInfusionValue",
      "citrateFlowRate",
      "caClInfusionRate"
    ];

    if (staticInputs.includes(name)) {
      return;
    }
    if (!name) {
      invalidEntries = replacementFluidDosages.reduce(
        (wrongValues, medication) => {
          if (
            this.state[medication] < requiredRanges[medication].min ||
            this.state[medication] > requiredRanges[medication].max
          ) {
            wrongValues.push(medication);
          }

          return wrongValues;
        },
        []
      );
    } else if (name) {
      invalidEntries = [name];

      if (
        this.state[name] < requiredRanges[name].min ||
        this.state[name] > requiredRanges[name].max
      ) {
        this.setState({
          dosageErrors: [...dosageErrors, ...invalidEntries],
          readyForSubmission: false
        });
      } else {
        this.setState(
          {
            dosageErrors: this.checkDosageErrors(name)
          },
          () => this.checkIfReadyForSubmission()
        );
      }
    }

    return invalidEntries;
  };

  checkDosageErrors = invalidEntry => {
    const { dosageErrors } = this.state;
    let newDosageErrors = [];

    newDosageErrors = dosageErrors.filter(elementName => {
      return elementName !== invalidEntry;
    });

    return newDosageErrors;
  };

  checkIfReadyForSubmission = () => {
    const { timeBetweenOrdersIsValid } = this.props;
    const { dosageErrors } = this.state;

    if (dosageErrors.length || !timeBetweenOrdersIsValid) {
      this.setState({ readyForSubmission: false });
    } else {
      this.setState({ readyForSubmission: true });
    }
  };

  validateOrder = () => {
    const { timeBetweenOrdersIsValid } = this.props;
    const invalidEntries = this.checkForInvalidInputs();

    if (timeBetweenOrdersIsValid && invalidEntries.length === 0) {
      this.setState({ dosageErrors: [] }, () =>
        this.checkIfReadyForSubmission()
      );
    } else if (!timeBetweenOrdersIsValid || invalidEntries.length !== 0) {
      this.checkIfReadyForSubmission();
    }
  };

  compileOrder = () => {
    const { timeBetweenOrders } = this.props;
    const {
      modality,
      sodium,
      potassium,
      chloride,
      bicarbonate,
      calcium,
      magnesium,
      phosphorous,
      grossUltraFiltration,
      bloodFlowRate,
      replacementFluidFlowRate,
      saline3Percent,
      d5W,
      sodiumPhosphate15mmol100ml,
      anticoagulation,
      otherFluidsBolusValue,
      otherFluidsInfusionValue,
      citrateFlowRate,
      caClInfusionRate
    } = this.state;

    const order = {
      id: uuidv4(),
      timeStamp: this.createTimeStamp(),
      fluidDialysateValues: {
        sodium,
        potassium,
        chloride,
        bicarbonate,
        calcium,
        magnesium,
        phosphorous,
        bun: 0,
        creatinine: 0
      },
      modality,
      anticoagulation,
      BFR: bloodFlowRate,
      Qr: replacementFluidFlowRate,
      Qd: replacementFluidFlowRate,
      grossUF: grossUltraFiltration,
      timeToNextLabs: timeBetweenOrders,
      otherFluidsSaline: saline3Percent,
      otherFluidsD5W: d5W,
      otherFluidsSodiumPhosphate: sodiumPhosphate15mmol100ml,
      otherFluidsBolusValue,
      otherFluidsInfusionValue,
      citrateFlowRate,
      caClInfusionRate
    };
    // dosages: {
    //   modality,
    //   sodium,
    //   potassium,
    //   chloride,
    //   bicarbonate,
    //   calcium,
    //   magnesium,
    //   phosphorous,
    //   grossUltraFiltration,
    //   bloodFlowRate,
    //   replacementFluidFlowRate,
    //   saline3Percent,
    //   d5W,
    //   sodiumPhosphate15mmol100ml,
    //   anticoagulation
    // }

    return order;
  };

  // Creating TimeStamp Start

  createTimeStamp = () => {
    const { currentTime, currentDay } = this.props.time;
    return `${currentTime}:00 - Day ${currentDay}`;
  };

  handletimeBetweenOrdersChange = async event => {
    const { value } = event.target;
    const timeBetweenOrders = await this.validateEnteredTimeBetweenOrders(
      value
    );
    await this.props.setTimeBetweenOrders(timeBetweenOrders);
    this.validateOrder();
  };

  validateEnteredTimeBetweenOrders = enteredTime => {
    const { validateTimeBetweenOrders } = this.props;
    const parsedTime = parseFloat(enteredTime);
    if (!isNaN(parsedTime)) {
      if (parsedTime >= 2 && parsedTime <= 24) {
        validateTimeBetweenOrders(true);
        return Math.round(parsedTime);
      } else {
        validateTimeBetweenOrders(false);
        return parsedTime;
      }
    } else {
      validateTimeBetweenOrders(false);
      return enteredTime;
    }
  };

  incrementTimeBetweenOrders = () => {
    let { currentTime, currentDay } = this.props.time;
    const { timeBetweenOrders } = this.props;

    currentTime += timeBetweenOrders;

    if (currentTime >= 24) {
      currentTime -= 24;
      currentDay++;
    }

    const newTime = {
      currentTime,
      currentDay
    };
    this.props.setTime(newTime);
  };

  // Creating TimeStamp End

  submitNewOrder = event => {
    event.preventDefault();
    const newOrder = this.compileOrder();
    this.props.submitOrder(newOrder);
    // this.props.closeOrdersModal()
  };

  toggleCheckBoxes = event => {
    const { name } = event.target;
    if (name === "saline3Percent") {
      this.setState({ [name]: !this.state[name], d5W: false });
    } else if (name === "d5W") {
      this.setState({ [name]: !this.state[name], saline3Percent: false });
    } else {
      this.setState({ [name]: !this.state[name] });
    }
  };

  clearInputs = event => {
    event.preventDefault();
    this.setState({
      modality: "Pre-filter CVVH",
      sodium: 0,
      potassium: 0,
      chloride: 0,
      bicarbonate: 0,
      calcium: 0,
      magnesium: 0,
      phosphorous: 0,
      grossUltraFiltration: 0,
      bloodFlowRate: 0,
      replacementFluidFlowRate: 0,
      saline3Percent: false,
      d5W: false,
      sodiumPhosphate15mmol100ml: false,
      anticoagulation: "None",
      readyForSubmission: false,
      dosageErrors: [],
      timeBetweenOrders: 8
    });
  };

  fillForm = event => {
    event.preventDefault();
    this.setState(
      {
        modality: "Pre-filter CVVH",
        sodium: 135,
        potassium: 2,
        chloride: 100,
        bicarbonate: 30,
        calcium: 2,
        magnesium: 1,
        phosphorous: 1,
        grossUltraFiltration: 1000,
        bloodFlowRate: 300,
        replacementFluidFlowRate: 7
      },
      () => this.validateOrder()
    );
  };

  render() {
    const {
      modality,
      saline3Percent,
      d5W,
      sodiumPhosphate15mmol100ml,
      readyForSubmission,
      anticoagulation
    } = this.state;

    const { orders, closeOrdersModal, timeBetweenOrders } = this.props;

    const {
      replacementFluidDosages,
      modalityDosages,
      anticoagulationDosages,
      otherFluidDosages,
      citrateDosages
    } = orderDosages;

    return (
      <form className="OrdersModal">
        <div className="orders-modal-sidebar"></div>
        <div
          className={
            !orders.length
              ? "orders-modal-main-content"
              : "orders-modal-main-content-no-interval-input"
          }
        >
          <header className="orders-modal-header">
            <h2 className="orders-modal-h2">Orders</h2>
            <div className="orders-modal-header-button-container">
              <button
                className="prov-values-btn"
                onClick={event => this.fillForm(event)}
              >
                Add sample values
              </button>
              <button
                className="orders-modal-close-btn-top"
                onClick={event => closeOrdersModal(event)}
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
          </header>

          {!orders.length && (
            <div className="timeBetweenOrders-container">
              <h3 className="timeBetweenOrders-label">Time Between Orders</h3>
              <input
                type="text"
                // pattern="[0-9]*"
                className="timeBetweenOrders-input"
                name={"timeBetweenOrders"}
                value={timeBetweenOrders}
                onChange={event => this.handletimeBetweenOrdersChange(event)}
              />
            </div>
          )}
          <section className="orders-modality-container">
            <div className="header-info-container">
              <h3 className="orders-modal-section-header">Modality</h3>
              <a
                href="https://github.com/raualex/crrt-teaching-tool-v2"
                className="textbook-link"
              >
                <i className="far fa-question-circle"></i>
              </a>
            </div>

            <InputContainer
              type={"radio"}
              currentInputState={this.state}
              handleInputChange={this.handleStringChange}
              dosagesToDisplay={modalityDosages}
              radioButtonCategory={"modality"}
            />
          </section>

          <section className="orders-replacement-fluid-container">
            <div className="header-info-container">
              <h3 className="orders-modal-section-header">
                {modality === "CVVHD" ? "Dialysate Fluid" : "Replacement Fluid"}
              </h3>
              <a
                href="https://github.com/raualex/crrt-teaching-tool-v2"
                className="textbook-link"
              >
                <i className="far fa-question-circle"></i>
              </a>
            </div>

            <InputContainer
              className="input-container-main"
              type={"number"}
              currentInputState={this.state}
              handleInputChange={this.handleNumberChange}
              dosagesToDisplay={replacementFluidDosages}
              radioButtonCategory={null}
            />
          </section>
          <section className="orders-modality-other-container">
            <h3 className="orders-modal-section-header">
              Other Fluids/Medications
            </h3>
            <div className="other-fluids-meds-checkbox">
              <label className="modality-checkbox-label">
                <input
                  type="checkbox"
                  name="saline3Percent"
                  value={saline3Percent}
                  checked={saline3Percent === true}
                  onChange={event => this.toggleCheckBoxes(event)}
                />
                Saline 3%
                <a
                  href="https://github.com/raualex/crrt-teaching-tool-v2"
                  className="textbook-link"
                >
                  <i className="far fa-question-circle"></i>
                </a>
              </label>
            </div>

            <div className="other-fluids-meds-checkbox">
              <label className="modality-checkbox-label">
                <input
                  type="checkbox"
                  name="d5W"
                  value={d5W}
                  checked={d5W === true}
                  onChange={event => this.toggleCheckBoxes(event)}
                />
                D5W
                <a
                  href="https://github.com/raualex/crrt-teaching-tool-v2"
                  className="textbook-link"
                >
                  <i className="far fa-question-circle"></i>
                </a>
              </label>
            </div>

            <div className="other-fluids-meds-checkbox">
              <label className="modality-checkbox-label">
                <input
                  type="checkbox"
                  name="sodiumPhosphate15mmol100ml"
                  value={sodiumPhosphate15mmol100ml}
                  checked={sodiumPhosphate15mmol100ml === true}
                  onChange={event => this.toggleCheckBoxes(event)}
                />
                Sodium Phosphate (15mmol and 100mL)
                <a
                  href="https://github.com/raualex/crrt-teaching-tool-v2"
                  className="textbook-link"
                >
                  <i className="far fa-question-circle"></i>
                </a>
              </label>
            </div>
            {saline3Percent && (
              <InputContainer
                className="input-container-other-fluids"
                type={"number"}
                currentInputState={this.state}
                handleInputChange={this.handleNumberChange}
                dosagesToDisplay={otherFluidDosages}
                radioButtonCategory={null}
              />
            )}
            {d5W && (
              <InputContainer
                className="input-container-other-fluids"
                type={"number"}
                currentInputState={this.state}
                handleInputChange={this.handleNumberChange}
                dosagesToDisplay={otherFluidDosages}
                radioButtonCategory={null}
              />
            )}
          </section>

          <section className="orders-modality-anticoagulation-container">
            <h3 className="orders-modal-section-header">Anticoagulation</h3>

            <InputContainer
              type={"radio"}
              currentInputState={this.state}
              handleInputChange={this.handleStringChange}
              dosagesToDisplay={anticoagulationDosages}
              radioButtonCategory={"anticoagulation"}
            />
            {anticoagulation === "Citrate" && (
              <InputContainer
                className="input-container-anticoagulation"
                type={"number"}
                currentInputState={this.state}
                handleInputChange={this.handleNumberChange}
                dosagesToDisplay={citrateDosages}
                radioButtonCategory={null}
              />
            )}
          </section>

          <footer className="orders-modal-footer">
            <button
              className={
                readyForSubmission
                  ? "submit-case-btn footer-btn submit-btn-active"
                  : "submit-case-btn footer-btn submit-btn-inactive"
              }
              onClick={event => this.submitNewOrder(event)}
              disabled={!readyForSubmission}
            >
              Submit
            </button>
            <button
              className="clear-order-inputs-btn footer-btn"
              onClick={event => this.clearInputs(event)}
            >
              Reset
            </button>
            <button
              className="orders-modal-close-btn-bottom footer-btn"
              onClick={event => closeOrdersModal(event)}
            >
              Close
            </button>
          </footer>
        </div>
      </form>
    );
  }
}

export const mapStateToProps = ({
  orders,
  time,
  timeBetweenOrders,
  timeBetweenOrdersIsValid,
  selectedCase,
  labData,
  inputOutputData
}) => ({
  orders,
  time,
  timeBetweenOrders,
  timeBetweenOrdersIsValid,
  selectedCase,
  labData,
  inputOutputData
});

export const mapDispatchToProps = dispatch => ({
  submitOrder: order => dispatch(submitOrder(order)),
  setTime: newTime => dispatch(setTime(newTime)),
  setTimeBetweenOrders: TimeBetweenOrders =>
    dispatch(setTimeBetweenOrders(TimeBetweenOrders)),
  validateTimeBetweenOrders: isValid =>
    dispatch(validateTimeBetweenOrders(isValid)),
  calculateLabData: newLabData => dispatch(calculateLabData(newLabData)),
  setInputOutputData: newInputOutput => dispatch(setInputOutputData(newInputOutput)),
  addResultsMessagesToOrder: (resultsMessages, id) =>
    dispatch(addResultsMessagesToOrder(resultsMessages, id)),
  addMedications: timeBetweenOrders =>
    dispatch(addMedications(timeBetweenOrders)),
  addVitals: timeBetweenOrders => dispatch(addVitals(timeBetweenOrders)),
  recordHourlyTimestamp: timeStamps =>
    dispatch(recordHourlyTimestamp(timeStamps))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrdersModal);
