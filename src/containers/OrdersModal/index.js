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
			readyForSubmission: false
		}
	}

	validateOrderSubmit = () => {
		const concentrationsWithNumValues = [	
																					'sodium',
																					'potassium',
																					'chloride',
																					'bicarbonate',
																					'calcium',
																					'magnesium',
																					'phosphorous',
																					'grossUltraFiltration',
																					'bloodFlowRate', 
																					'replacementFluidFlowRate'
																				]

	}

	validateOrderInput = event => {
		const { name, value } = event.target;
		const { requiredRanges, errorMessages } = orderDosages
		const parsedValue = parseInt(value)

		if(parsedValue < requiredRanges[name].min || parsedValue > requiredRanges[name].max) {
			console.log(errorMessages[name])
		} 
	}

	handleStringChange = event => {
		const { name, value } = event.target
		this.setState({ [name]: value })
		
		if(!isNaN(this.state[name])) {
			this.validateOrderInput(event)
		}
	}




	// validateOrderForm = event => {
	// 	const { name, value } = event.target;
	// 	const { ranges, errorMessages } = dosageFormat

	// 	if(isNaN(value)) {
	// 		console.log(value)
	// 		} else {
	// 		const parsedValue = parseInt(value)
	// 		if(parsedValue < ranges[name].min || parsedValue > ranges[name].max) {
	// 			console.log(errorMessages[name])
	// 		} else {
	// 			this.handleNumberChange(event)
	// 		}
	// 	}
	// }

	// handleStringChange = event => {
	// 	const { name, value } = event.target
	// 	this.setState({ [name]: value })

	// }

	handleNumberChange = event => {
		const { name, value } = event.target
		const parsedValue = parseInt(value)
		this.setState({ [name]: parsedValue })
	}

	toggleCheckBoxes = event => {
		const { name } = event.target
		this.setState({ [name]: !this.state[name] })
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
			anticoagulation: 'None'
		})
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
			readyForSubmission
		} = this.state

		return (
			<form className='OrdersModal'>
				<header className='orders-header'>
					<h2>Orders</h2>
					<button 
						className='orders-modal-close-btn-top'
						onClick={event => this.props.closeOrdersModal(event)}
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
							type='number'
							name='sodium'
							value={sodium}
							onChange={event => this.handleStringChange(event)}
						/>
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
							type='number'
							name='potassium'
							value={potassium}
							onChange={event => this.handleStringChange(event)}
						/>
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
							type='number'
							name='chloride'
							value={chloride}
							onChange={event => this.handleStringChange(event)}
						/>
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
							type='number'
							name='bicarbonate'
							value={bicarbonate}
							onChange={event => this.handleStringChange(event)}
						/>
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
							type='number'
							name='calcium'
							value={calcium}
							onChange={event => this.handleStringChange(event)}
						/>
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
							type='number'
							name='magnesium'
							value={magnesium}
							onChange={event => this.handleStringChange(event)}
						/>
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
							type='number'
							name='phosphorous'
							value={phosphorous}
							onChange={event => this.handleStringChange(event)}
						/>
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
							type='number'
							name='grossUltraFiltration'
							value={grossUltraFiltration}
							onChange={event => this.handleStringChange(event)}
						/>
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
							type='number'
							name='bloodFlowRate'
							value={bloodFlowRate}
							onChange={event => this.handleStringChange(event)}
						/>
					</article>

					<article className='input-container'>
						<div className='header-info-container'>
							<h4>Replacement Fluid Flow Rate (L/hr)</h4>
							<a href='https://github.com/raualex/crrt-teaching-tool-v2' className='textbook-link'>
								<i className='far fa-question-circle'></i>
							</a>
						</div>
	
						<input 
							type='number'
							name='replacementFluidFlowRate'
							value={replacementFluidFlowRate}
							onChange={event => this.handleStringChange(event)}
						/>
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
						onClick={event => this.props.closeOrdersModal(event)}
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
