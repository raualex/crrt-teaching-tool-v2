import React, { Component } from "react";
import "./OrdersModal.css";
import { connect } from "react-redux";
import {
  submitOrder,
  setTime,
  setTimeBetweenOrders,
  validateTimeBetweenOrders
} from "../../Actions/ordersActions";
import { calculateLabData } from "../../Actions/calculationActions";
import orderDosages from "../../utils/orderDosages.js";
import InputContainer from "../../components/InputContainer";
import { compileLabData } from "../../utils/labEquations";
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
      readyForSubmission: false,
      dosageErrors: [],
      currentTime: 10,
      currentDay: 1,
      timeBetweenOrders: 8
    };
  }

  componentDidUpdate(prevProps) {
    const {
      closeOrdersModal,
      calculateLabData,
      orders,
      timeBetweenOrders,
      timeBetweenOrdersIsValid,
      selectedCase,
      labData
    } = this.props;

  //   if(timeBetweenOrdersIsValid !== prevProps.timeBetweenOrdersIsValid) {
  //     if(timeBetweenOrdersIsValid === false) {
  //       this.setState({ readyForSubmission: false })
  //     } else {
  //       // this.setState({ readyForSubmission: true })
  //     }
  //     this.validateOrder()
  //   }

    if(this.props.orders !== prevProps.orders) {
      const newLabData = compileLabData(
        labData,
        timeBetweenOrders,
        selectedCase.usualWeight,
        orders[orders.length - 1]
      );

      calculateLabData(newLabData);
      this.incrementTimeBetweenOrders();
      closeOrdersModal();
    }
  }

  handleStringChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
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

  checkForInvalidInputs = (name) => {
		const { requiredRanges, replacementFluidDosages } = orderDosages;
		const { dosageErrors } = this.state
		let invalidEntries = [];

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
			invalidEntries = [name]

			if (
				this.state[name] < requiredRanges[name].min ||
				this.state[name] > requiredRanges[name].max
			 ) {
				this.setState({ 
					dosageErrors: [...dosageErrors, ...invalidEntries],
					readyForSubmission: false
				})
			 } else {
				 
				this.setState({ 
					dosageErrors: this.checkDosageErrors(name)
				}, () => this.checkIfReadyForSubmission())
			 }
		}

		return invalidEntries;
	};

	checkDosageErrors = (invalidEntry) => {
		const { dosageErrors } = this.state
		let newDosageErrors = [];

		newDosageErrors = dosageErrors.filter((elementName) => {
			return elementName !== invalidEntry
		})
		
		return newDosageErrors
	}

	checkIfReadyForSubmission = () => {
		const { timeBetweenOrdersIsValid } = this.props
		const { dosageErrors } = this.state

		if (dosageErrors.length || !timeBetweenOrdersIsValid) {
			this.setState({ readyForSubmission: false })
		} else {
			this.setState({ readyForSubmission: true })
		}
	}

  validateOrder = () => {
    const { timeBetweenOrdersIsValid } = this.props;
		const invalidEntries = this.checkForInvalidInputs();

		if(timeBetweenOrdersIsValid && invalidEntries.length === 0) {
		  this.setState({ dosageErrors: [] }, () => this.checkIfReadyForSubmission());
		} else if (!timeBetweenOrdersIsValid || invalidEntries.length !== 0) {
			this.checkIfReadyForSubmission()
		}
  };

  compileOrder = () => {
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
      anticoagulation
    } = this.state;

    const order = {
      id: uuidv4(),
      timeStamp: this.createTimeStamp(),
      dosages: {
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
        anticoagulation
      }
    };

    return order;
  };

  // Creating TimeStamp Start

  createTimeStamp = () => {
    const { currentTime, currentDay } = this.props.time;
    return `${currentTime}:00 - Day ${currentDay}`;
  };

  handletimeBetweenOrdersChange = async event => {
		const { value } = event.target;
		const timeBetweenOrders = await this.validateEnteredTimeBetweenOrders(value);
		await this.props.setTimeBetweenOrders(timeBetweenOrders);
		this.validateOrder();
  };

  validateEnteredTimeBetweenOrders = enteredTime => {
    const { validateTimeBetweenOrders } = this.props;
    const parsedTime = parseFloat(enteredTime)
    if(!isNaN(parsedTime)) {
      if (parsedTime >= 2 && parsedTime <= 24) {
        validateTimeBetweenOrders(true);
        return Math.round(parsedTime);
      } else {
				validateTimeBetweenOrders(false)
        return parsedTime
			}
    } else {
			validateTimeBetweenOrders(false)
      return enteredTime
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
    this.setState({ [name]: !this.state[name] });
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
        potassium: 3,
        chloride: 96,
        bicarbonate: 25,
        calcium: 2,
        magnesium: 1,
        phosphorous: 1,
        grossUltraFiltration: 1500,
        bloodFlowRate: 250,
        replacementFluidFlowRate: 7
      },
      () => this.validateOrder()
    );
  };

  render() {
    const {
      saline3Percent,
      d5W,
      sodiumPhosphate15mmol100ml,
      readyForSubmission
    } = this.state;

    const { 
      orders, 
      closeOrdersModal, 
      timeBetweenOrders 
    } = this.props;
    
    const {
      replacementFluidDosages,
      modalityDosages,
      anticoagulationDosages
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
              <h3 className="orders-modal-section-header">Replacement Fluid</h3>
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
  labData
}) => ({
  orders,
  time,
  timeBetweenOrders,
  timeBetweenOrdersIsValid,
  selectedCase,
  labData
});

export const mapDispatchToProps = dispatch => ({
  submitOrder: order => dispatch(submitOrder(order)),
  setTime: newTime => dispatch(setTime(newTime)),
  setTimeBetweenOrders: TimeBetweenOrders =>
    dispatch(setTimeBetweenOrders(TimeBetweenOrders)),
  validateTimeBetweenOrders: (isValid) => dispatch(validateTimeBetweenOrders(isValid)),
  calculateLabData: (newLabData) => dispatch(calculateLabData(newLabData))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrdersModal);
