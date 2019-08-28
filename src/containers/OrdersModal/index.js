import React, { Component } from 'react';
import './OrdersModal.css';
import { connect } from 'react-redux';
import { submitOrder } from '../../Actions/ordersActions';
import orderDosages from '../../utils/orderDosages.js';
import InputContainer from '../../components/InputContainer';
const uuidv4 = require('uuid/v4');

export class OrdersModal extends Component {
	constructor(props) {
		super(props);
		this.state = {
			modality: 'Pre-filter CVVH',
			sodium: 0,
			potassium: 0,
			chloride: 0,
			bicarbonate: 0,
			calcium: 0,
			magnesium: 0,
			phosphorous : 0,
			grossUltraFiltration: 0,
			bloodFlowRate: 0,
			replacementFluidFlowRate: 0,
			saline3Percent: false,
			d5W: false,
			sodiumPhosphate15mmol100ml: false,
			anticoagulation: 'None',
			readyForSubmission: false,
			dosageErrors: [],
			currentTime: 10, 
			currentDay: 1
		}
	}

	handleStringChange = event => {
		const { name, value } = event.target
		this.setState({ [name]: value })
	}

	handleNumberChange = event => {
		const { name, value } = event.target
		const parsedValue = parseFloat(value.trim())
		this.setState({ 
			[name]: parsedValue 
		}, () => this.validateOrder())
	}

	checkForInvalidInputs = () => {
		const { requiredRanges, replacementFluidDosages } = orderDosages
		const invalidEntries = replacementFluidDosages.reduce((wrongValues, medication) => {
			if(this.state[medication] !== 0) {
				if(this.state[medication] < requiredRanges[medication].min || this.state[medication] > requiredRanges[medication].max) {
					wrongValues.push(medication)
				}
			}
			return wrongValues
		}, [])

		return invalidEntries
	}

	validateOrder = () => {
		const invalidEntries = this.checkForInvalidInputs()

		if(invalidEntries.length) {
			this.setState({ 
				dosageErrors: invalidEntries,
				readyForSubmission: false 
			})
		} else {
			this.setState({ 
				dosageErrors: [], 
				readyForSubmission: true
			})
		}
	}

	compileOrder = () => {
		const {
			modality,
			sodium,
			potassium,
			chloride,
			bicarbonate,
			calcium,
			magnesium,
			phosphorous ,
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
		}

		this.incrementTimeBetweenOrders()
		return order
	}

	// Creating TimeStamp Start

	createTimeStamp = () => {
		const { currentTime, currentDay } = this.state
    return `${currentTime}:00 - Day ${currentDay}`;
	}
	
	incrementTimeBetweenOrders = () => {
		let { currentTime, currentDay } = this.state 

		currentTime += 8

		if(currentTime >= 24) {
			currentTime -= 24
			currentDay++
		}

		this.setState({
			currentTime,
			currentDay
		})
	}

// Creating TimeStamp End


	submitNewOrder = event => {
		event.preventDefault();
		const { submitOrder, closeOrdersModal } = this.props
		const newOrder = this.compileOrder()
		
		submitOrder(newOrder)
		closeOrdersModal(event)
	}

	toggleCheckBoxes = event => {
		const { name } = event.target
		this.setState({ [name]: !this.state[name] })
	}

	clearInputs = event => {
		event.preventDefault();
		this.setState({
			modality: 'Pre-filter CVVH',
			sodium: 0,
			potassium: 0,
			chloride: 0,
			bicarbonate: 0,
			calcium: 0,
			magnesium: 0,
			phosphorous : 0,
			grossUltraFiltration: 0,
			bloodFlowRate: 0,
			replacementFluidFlowRate: 0,
			saline3Percent: false,
			d5W: false,
			sodiumPhosphate15mmol100ml: false,
			anticoagulation: 'None',
			readyForSubmission: false,
			dosageErrors: []
		})
	}

	fillForm = event => {
		event.preventDefault();
		this.setState({
			modality: 'Pre-filter CVVH',
			sodium: 135,
			potassium: 3,
			chloride: 96,
			bicarbonate: 25,
			calcium: 2,
			magnesium: 1,
			phosphorous : 1,
			grossUltraFiltration: 1500,
			bloodFlowRate: 250,
			replacementFluidFlowRate: 7,
		}, () => this.validateOrder())		
	}

	render() {
		const {
			saline3Percent,
			d5W,
			sodiumPhosphate15mmol100ml,
			readyForSubmission
		} = this.state

		const { closeOrdersModal } = this.props;
		const {
			replacementFluidDosages,
			modalityDosages, 
			anticoagulationDosages 
		} = orderDosages;

		return (
			<form className='OrdersModal'>
				<div className='orders-modal-sidebar'>
				</div>
				<div className='orders-modal-main-content'>
					<header className='orders-modal-header'>
						<h2 className='orders-modal-h2'>Orders</h2>
						<div className='orders-modal-header-button-container'>
							<button 
								className='header-btn' 
								onClick={event => this.fillForm(event)}
							>Add provisional values
							</button>
								<button 
									className='orders-modal-close-btn-top'
									onClick={event => closeOrdersModal(event)}
								>
									<i className="fas fa-times">
									</i>
								</button>
						</div>
					</header>

					<section className='orders-modality-container'>
						<div className='header-info-container'>
							<h3 className='orders-modal-section-header'>Modality</h3>
							<a 
								href='https://github.com/raualex/crrt-teaching-tool-v2' 
								className='textbook-link'
							>
								<i className='far fa-question-circle'></i>
							</a>
						</div>

						<InputContainer
							type={'radio'} 
							currentInputState={this.state}
							handleInputChange={this.handleStringChange}
							dosagesToDisplay={modalityDosages}
							radioButtonCategory={'modality'}
						/>
					</section>

					<section className='orders-replacement-fluid-container'>
						<div className='header-info-container'>
							<h3 className='orders-modal-section-header'>Replacement Fluid</h3>
							<a 
								href='https://github.com/raualex/crrt-teaching-tool-v2' 
								className='textbook-link'
							>
								<i className='far fa-question-circle'></i>
							</a>
						</div>

						<InputContainer
							className='input-container-main'
							type={'number'} 
							currentInputState={this.state}
							handleInputChange={this.handleNumberChange}
							dosagesToDisplay={replacementFluidDosages}
							radioButtonCategory={null}
						/>

					</section>
					<section className='orders-modality-other-container'>
						<h3 className='orders-modal-section-header'>Other Fluids/Medications</h3>
						<div className='other-fluids-meds-checkbox'>
							<label className='modality-checkbox-label'>
								<input 
									type='checkbox'
									name='saline3Percent'
									value={saline3Percent}
									checked={saline3Percent === true}
									onChange={event => this.toggleCheckBoxes(event)}
								/>
								Saline 3%
									<a 
									href='https://github.com/raualex/crrt-teaching-tool-v2' 
									className='textbook-link'
									>
										<i className='far fa-question-circle'></i>
									</a>
							</label>
						</div>

						<div className='other-fluids-meds-checkbox'>
							<label className='modality-checkbox-label'>
								<input 
									type='checkbox'
									name='d5W'
									value={d5W}
									checked={d5W === true}
									onChange={event => this.toggleCheckBoxes(event)}
								/>
								D5W
									<a 
									href='https://github.com/raualex/crrt-teaching-tool-v2' 
									className='textbook-link'
									>
										<i className='far fa-question-circle'></i>
									</a>
							</label>
						</div>

						<div className='other-fluids-meds-checkbox'>
							<label className='modality-checkbox-label'>
								<input 
									type='checkbox'
									name='sodiumPhosphate15mmol100ml'
									value={sodiumPhosphate15mmol100ml}
									checked={sodiumPhosphate15mmol100ml === true}
									onChange={event => this.toggleCheckBoxes(event)}
								/>
								Sodium Phosphate (15mmol and 100mL)
									<a 
									href='https://github.com/raualex/crrt-teaching-tool-v2' 
									className='textbook-link'
									>
										<i className='far fa-question-circle'></i>
									</a>
							</label>
						</div>
					</section>

					<section className='orders-modality-anticoagulation-container'>
						<h3 className='orders-modal-section-header'>Anticoagulation</h3>

						<InputContainer
							type={'radio'}
							currentInputState={this.state}
							handleInputChange={this.handleStringChange}
							dosagesToDisplay={anticoagulationDosages}
							radioButtonCategory={'anticoagulation'} 
						/>
					</section>

					<footer className='orders-modal-footer'>
						<button 
							className={readyForSubmission ? 'submit-case-btn footer-btn submit-btn-active' : 'submit-case-btn footer-btn submit-btn-inactive'} 
							onClick={event => this.submitNewOrder(event)}
							disabled={!readyForSubmission}
						>
							Submit
						</button>
						<button className='clear-order-inputs-btn footer-btn' onClick={event => this.clearInputs(event)}>Reset</button>
						<button 
							className='orders-modal-close-btn-bottom footer-btn'
							onClick={event => closeOrdersModal(event)}
						>Close</button>
					</footer>
				</div>
			</form>
		)
	}
}

export const mapStateToProps = ({ orders }) => ({
	orders
});

export const mapDispatchToProps = (dispatch) => ({
	submitOrder: (order) => dispatch(submitOrder(order))
});

export default connect(mapStateToProps, mapDispatchToProps)(OrdersModal);