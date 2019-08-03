import React, { Component } from 'react';
import './OrdersModal.css';
import { connect } from 'react-redux';
import { submitOrder } from '../../Actions/ordersActions';
import orderDosages from '../../utils/orderDosages.js';
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
			//WHAT ARE THE ACCEPTABLE RANGES FOR BLOODFLOWRATE?
			replacementFluidFlowRate: 0,
			saline3Percent: false,
			d5W: false,
			sodiumPhosphate15mmol100ml: false,
			anticoagulation: 'None',
			readyForSubmission: false,
			dosageErrors: [],
			currentInput: ''
		}
	}

	handleStringChange = event => {
		const { name, value } = event.target
		this.setState({ [name]: value })
		this.validateOrderInput(event)
	}

	handleNumberChange = event => {
		const { name, value } = event.target
		const parsedValue = parseInt(value)
		this.setState({ 
			currentInput: name,
			[name]: parsedValue 
		}, () => this.validateOrder())
	}

	// checkSubmitButton = event => {
	// 	// const { name } = event.target
	// 	const { currentInput } = this.state;
	// 	if(this.state[currentInput] === null) {
	// 		this.setState({ readyForSubmission: false })
	// 	}
	// 	this.validateOrderInput(event)
	// }

	validateOrderInput = () => {
		const { requiredRanges, errorMessages } = orderDosages
		const { currentInput } = this.state;

		if(this.state[currentInput] < requiredRanges[currentInput].min || this.state[currentInput] > requiredRanges[currentInput].max) {
			console.log(`Out of range: ${requiredRanges[currentInput].min} - ${requiredRanges[currentInput].max}`)

			this.setState({ 
				dosageErrors: [...this.state.dosageErrors, currentInput], 
				readyForSubmission: false 
			})
		} else {
			this.setState({
				readyForSubmission: false 
			}, () => this.validateOrder())
		}
	}


	compileErrors = (errors) => {

	}


	validateOrder = () => {
		const { requiredRanges, errorMessages } = orderDosages

		const fluidsWithNumValues = [	'sodium','potassium','chloride','bicarbonate','calcium','magnesium','phosphorous','grossUltraFiltration','bloodFlowRate','replacementFluidFlowRate']

		const incorrectValues = fluidsWithNumValues.filter(fluid => {
			return this.state[fluid] < requiredRanges[fluid].min || this.state[fluid] > requiredRanges[fluid].max
		})
		console.log('incorrectValues: ' + incorrectValues)

		if(incorrectValues.length) {
			this.setState({ 
				dosageErrors: incorrectValues,
				readyForSubmission: false 
			})
		} else {
			this.setState({ 
				dosageErrors: [], 
				readyForSubmission: true
			})
		}
	}

	submitNewOrder = event => {
		event.preventDefault();
		const { submitOrder, orders, closeOrdersModal } = this.props
		const newOrder = {...this.state, id: uuidv4()}
		
		if(!orders.includes(newOrder)) {
			submitOrder(newOrder)
		}
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
			readyForSubmission: false
		})
	}

	fillForm = (event) => {
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
			bloodFlowRate: 1,
			replacementFluidFlowRate: 7,
		})	
		this.validateOrder(event)	
	}

	render() {
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
			anticoagulation,
			readyForSubmission,
			dosageErrors
		} = this.state

		const { closeOrdersModal } = this.props;
		const { errorMessages } = orderDosages;

		return (
			<form className='OrdersModal'>
				<header className='orders-header'>
					<h2>Orders</h2>
					<button onClick={event => this.fillForm(event)}>Add provisional values</button>
					<button 
						className='orders-modal-close-btn-top'
						onClick={event => closeOrdersModal(event)}
					>X</button>
				</header>

				<section className='orders-modality-container'>
					<div className='header-info-container'>
						<h3>Modality</h3>
						<a 
							href='https://github.com/raualex/crrt-teaching-tool-v2' 
							className='textbook-link'
						>
							<i className='far fa-question-circle'></i>
						</a>
					</div>
					<div className='modality-radio'>
						<label>
							<input 
								type='radio'
								name='modality'
								value='Pre-filter CVVH'
								checked={modality === 'Pre-filter CVVH'}
								onChange={this.handleStringChange}
							/>
							Pre-filter CVVH
								<a 
								href='https://github.com/raualex/crrt-teaching-tool-v2' 
								className='textbook-link'
								>
									<i className='far fa-question-circle'></i>
								</a>
						</label>
					</div>

					<div className='modality-radio'>
						<label>
							<input 
								type='radio'
								name='modality'
								value='Post-filter CVVH'
								checked={modality === 'Post-filter CVVH'}
								onChange={this.handleStringChange}
							/>
							Post-filter CVVH
								<a 
								href='https://github.com/raualex/crrt-teaching-tool-v2' 
								className='textbook-link'
								>
									<i className='far fa-question-circle'></i>
								</a>
						</label>
					</div>

					<div className='modality-radio'>
						<label>
							<input 
								type='radio'
								name='modality'
								value='CVVHD'
								checked={modality === 'CVVHD'}
								onChange={this.handleStringChange}
							/>
							CVVHD
								<a 
								href='https://github.com/raualex/crrt-teaching-tool-v2' 
								className='textbook-link'
								>
									<i className='far fa-question-circle'></i>
								</a>
						</label>
					</div>
				</section>

				<section className='orders-replacement-fluid-container'>
					<div className='header-info-container'>
						<h3>Replacement Fluid</h3>
						<a 
							href='https://github.com/raualex/crrt-teaching-tool-v2' 
							className='textbook-link'
						>
							<i className='far fa-question-circle'></i>
						</a>
					</div>

					<article className='input-container'>
						<div className='header-info-container'>
							<h4>Sodium</h4>
							<a 
								href='https://github.com/raualex/crrt-teaching-tool-v2' 
								className='textbook-link'
							>
								<i className='far fa-question-circle'></i>
							</a>
						</div>
	
						<input 
							type='text'
							name='sodium'
							value={isNaN(sodium) ? 0 : sodium}
							onChange={event => this.handleNumberChange(event)}
						/>
						<div className='input-error-container'>
							<p className='input-error-text'>{
								dosageErrors.includes('sodium') ? errorMessages.sodium : 'Ternary'
							}
							</p>
						</div>
					</article>

					<article className='input-container'>
						<div className='header-info-container'>
							<h4>Potassium</h4>
							<a 
								href='https://github.com/raualex/crrt-teaching-tool-v2' 
								className='textbook-link'
							>
								<i className='far fa-question-circle'></i>
							</a>
						</div>
	
						<input 
							type='text'
							name='potassium'
							value={isNaN(potassium) ? 0 : potassium}
							onChange={event => this.handleNumberChange(event)}
						/>
						<div className='input-error-container'>
							<p className='input-error-text'>{
								dosageErrors.includes('potassium') ? errorMessages.potassium : 'Ternary'
							}
							</p>
						</div>
					</article>

					<article className='input-container'>
						<div className='header-info-container'>
							<h4>Chloride</h4>
							<a 
								href='https://github.com/raualex/crrt-teaching-tool-v2' 
								className='textbook-link'
							>
								<i className='far fa-question-circle'></i>
							</a>
						</div>

						<input 
							type='text'
							name='chloride'
							value={isNaN(chloride) ? 0 : chloride}
							onChange={event => this.handleNumberChange(event)}
						/>
						<div className='input-error-container'>
							<p className='input-error-text'>{
								dosageErrors.includes('chloride') ? errorMessages.chloride : 'Ternary'
							}
							</p>
						</div>
					</article>

					<article className='input-container'>
						<div className='header-info-container'>
							<h4>Bicarbonate</h4>
							<a 
								href='https://github.com/raualex/crrt-teaching-tool-v2' 
								className='textbook-link'
							>
								<i className='far fa-question-circle'></i>
							</a>
						</div>
	
						<input 
							type='text'
							name='bicarbonate'
							value={isNaN(bicarbonate) ? 0 : bicarbonate}
							onChange={event => this.handleNumberChange(event)}
						/>
						<div className='input-error-container'>
							<p className='input-error-text'>{
								dosageErrors.includes('bicarbonate') ? errorMessages.bicarbonate : 'Ternary'
							}
							</p>
						</div>
					</article>

					<article className='input-container'>
						<div className='header-info-container'>
							<h4>Calcium</h4>
							<a 
								href='https://github.com/raualex/crrt-teaching-tool-v2' 
								className='textbook-link'
							>
								<i className='far fa-question-circle'></i>
							</a>
						</div>
	
						<input 
							type='text'
							name='calcium'
							value={isNaN(calcium) ? 0 : calcium}
							onChange={event => this.handleNumberChange(event)}
						/>
						<div className='input-error-container'>
							<p className='input-error-text'>{
								dosageErrors.includes('calcium') ? errorMessages.calcium : 'Ternary'
							}
							</p>
						</div>
					</article>

					<article className='input-container'>
						<div className='header-info-container'>
							<h4>Magnesium</h4>
							<a 
								href='https://github.com/raualex/crrt-teaching-tool-v2' 
								className='textbook-link'
							>
								<i className='far fa-question-circle'></i>
							</a>
						</div>

						<input 
							type='text'
							name='magnesium'
							value={isNaN(magnesium) ? 0 : magnesium}
							onChange={event => this.handleNumberChange(event)}
						/>
						<div className='input-error-container'>
							<p className='input-error-text'>{
								dosageErrors.includes('magnesium') ? errorMessages.magnesium : 'Ternary'
							}
							</p>
						</div>
					</article>

					<article className='input-container'>
						<div className='header-info-container'>
							<h4>Phosphorous</h4>
							<a 
								href='https://github.com/raualex/crrt-teaching-tool-v2' 
								className='textbook-link'
							>
								<i className='far fa-question-circle'></i>
							</a>
						</div>
	
						<input 
							type='text'
							name='phosphorous'
							value={isNaN(phosphorous) ? 0 : phosphorous}
							onChange={event => this.handleNumberChange(event)}
						/>
						<div className='input-error-container'>
							<p className='input-error-text'>{
								dosageErrors.includes('phosphorous') ? errorMessages.phosphorous : 'Ternary'
							}
							</p>
						</div>
					</article>

					<article className='input-container'>
						<div className='header-info-container'>
							<h4>Gross Ultrafiltration (ml/Hr)</h4>
							<a 
								href='https://github.com/raualex/crrt-teaching-tool-v2' 
								className='textbook-link'
							>
								<i className='far fa-question-circle'></i>
							</a>
						</div>

						<input 
							type='text'
							name='grossUltraFiltration'
							value={isNaN(grossUltraFiltration) ? 0 : grossUltraFiltration}
							onChange={event => this.handleNumberChange(event)}
						/>
						<div className='input-error-container'>
							<p className='input-error-text'>{
								dosageErrors.includes('grossUltraFiltration') ? errorMessages.grossUltraFiltration : 'Ternary'
							}
							</p>
						</div>
					</article>

					<article className='input-container'>
						<div className='header-info-container'>
							<h4>Blood Flow Rate (mL/min)</h4>
							<a 
								href='https://github.com/raualex/crrt-teaching-tool-v2' 
								className='textbook-link'
							>
								<i className='far fa-question-circle'></i>
							</a>
						</div>
	
						<input 
							type='text'
							name='bloodFlowRate'
							value={isNaN(bloodFlowRate) ? 0 : bloodFlowRate}
							onChange={event => this.handleNumberChange(event)}
						/>
						<div className='input-error-container'>
							<p className='input-error-text'>{
								dosageErrors.includes('bloodFlowRate') ? errorMessages.bloodFlowRate : 'Ternary'
							}
							</p>
						</div>
					</article>

					<article className='input-container'>
						<div className='header-info-container'>
							<h4>Replacement Fluid Flow Rate (L/hr)</h4>
							<a href='https://github.com/raualex/crrt-teaching-tool-v2' className='textbook-link'>
								<i className='far fa-question-circle'></i>
							</a>
						</div>
	
						<input 
							type='text'
							name='replacementFluidFlowRate'
							value={isNaN(replacementFluidFlowRate) ? 0 : replacementFluidFlowRate}
							onChange={event => this.handleNumberChange(event)}
						/>
						<div className='input-error-container'>
							<p className='input-error-text'>{
								dosageErrors.includes('replacementFluidFlowRate') ? errorMessages.replacementFluidFlowRate : 'Ternary'
							}
							</p>
						</div>
					</article>
				</section>

				<section className='orders-modality-other-container'>
					<h3>Other Fluids/Medications</h3>
					<div className='other-fluids-meds-checkbox'>
						<label>
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
						<label>
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
						<label>
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
					<h3>Anticoagulation</h3>
					<div className='anticoagulation-radio'>
						<label>
							<input 
								type='radio'
								name='anticoagulation'
								value='None'
								checked={anticoagulation === 'None'}
								onChange={this.handleStringChange}
							/>
							None
						</label>
					</div>

					<div className='anticoagulation-radio'>
						<label>
							<input 
								type='radio'
								name='anticoagulation'
								value='Citrate'
								checked={anticoagulation === 'Citrate'}
								onChange={this.handleStringChange}
							/>
							Citrate
								<a 
								href='https://github.com/raualex/crrt-teaching-tool-v2' 
								className='textbook-link'
								>
									<i className='far fa-question-circle'></i>
								</a>
						</label>
					</div>
				</section>

				<button 
					className='submit-case-btn' 
					onClick={event => this.submitNewOrder(event)}
					disabled={!readyForSubmission}
				>
					Submit Order
				</button>

				<footer className='orders-header'>
					<button className='clear-order-inputs-btn' onClick={event => this.clearInputs(event)}>Reset</button>
					<button 
						className='orders-modal-close-btn-bottom'
						onClick={event => closeOrdersModal(event)}
					>Close</button>
				</footer>
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
