import React, { Component } from 'react';
import './OrdersModal.css';

class OrdersModal extends Component {
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
			otherFluidsMedications: '',
			anticoagulation: ''
		}
	}

	handleRadioChange = event => {
		this.setState({ modality: event.target.value })
	}

	handleReplacementFluidChange = event => {
		const { name, value } = event.target
		this.setState({ [name]: value })
	}

	submitOrder = event => {
		event.preventDefault();
		//Add this.state to Redux
		//MapDispatchToProps	
	}

	clearInputs = () => {
		this.setState({
			modality: '',
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
			otherFluidsMedications: '',
			anticoagulation: ''
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
			otherFluidsMedications,
			anticoagulation
		} = this.state

		return (
			<form className='OrdersModal'>
				<header className='orders-header'>
				</header>

				<section className='orders-modality-container'>
					<h3>Modality</h3>
						<div className='modality-radio'>
							<label>
								<input 
									type='radio'
									value='Pre-filter CVVH'
									checked={modality === 'Pre-filter CVVH'}
									onChange={this.handleModalityChange}
								/>
								Pre-filter CVVH
							</label>
						</div>

						<div className='modality-radio'>
							<label>
								<input 
									type='radio'
									value='Post-filter CVVH'
									checked={modality === 'Post-filter CVVH'}
									onChange={this.handleModalityChange}
								/>
								Post-filter CVVH
							</label>
						</div>

						<div className='modality-radio'>
							<label>
								<input 
									type='radio'
									value='CVVHD'
									checked={modality === 'CVVHD'}
									onChange={this.handleModalityChange}
								/>
								CVVHD
							</label>
						</div>
				</section>

				<section className='orders-replacement-fluid-container'>
					<h3>Replacement Fluid</h3>
					<article className='input-container'>
						<h4>Sodium</h4>
						<div className='medication-info-button'></div>
						<input 
							type='number'
							name='sodium'
							value={sodium}
							onChange={event => this.handleReplacementFluidChange(event)}
						/>
					</article>

					<article className='input-container'>
						<h4>Potassium</h4>
						<div className='medication-info-button'></div>
						<input 
							type='number'
							name='potassium'
							value={potassium}
							onChange={event => this.handleReplacementFluidChange(event)}
						/>
					</article>

					<article className='input-container'>
						<h4>Chloride</h4>
						<div className='medication-info-button'></div>
						<input 
							type='number'
							name='chloride'
							value={chloride}
							onChange={event => this.handleReplacementFluidChange(event)}
						/>
					</article>

					<article className='input-container'>
						<h4>Bicarbonate</h4>
						<div className='medication-info-button'></div>
						<input 
							type='number'
							name='bicarbonate'
							value={bicarbonate}
							onChange={event => this.handleReplacementFluidChange(event)}
						/>
					</article>

					<article className='input-container'>
						<h4>Calcium</h4>
						<div className='medication-info-button'></div>
						<input 
							type='number'
							name='calcium'
							value={calcium}
							onChange={event => this.handleReplacementFluidChange(event)}
						/>
					</article>

					<article className='input-container'>
						<h4>Magnesium</h4>
						<div className='medication-info-button'></div>
						<input 
							type='number'
							name='magnesium'
							value={magnesium}
							onChange={event => this.handleReplacementFluidChange(event)}
						/>
					</article>

					<article className='input-container'>
						<h4>Phosphorous</h4>
						<div className='medication-info-button'></div>
						<input 
							type='number'
							name='phosphorous'
							value={phosphorous}
							onChange={event => this.handleReplacementFluidChange(event)}
						/>
					</article>

					<article className='input-container'>
						<h4>Gross Ultrafiltration (ml/Hr)</h4>
						<div className='medication-info-button'></div>
						<input 
							type='number'
							name='grossUltraFiltration'
							value={grossUltraFiltration}
							onChange={event => this.handleReplacementFluidChange(event)}
						/>
					</article>

					<article className='input-container'>
						<h4>Blood Flow Rate (mL/min)</h4>
						<div className='medication-info-button'></div>
						<input 
							type='number'
							name='bloodFlowRate'
							value={bloodFlowRate}
							onChange={event => this.handleReplacementFluidChange(event)}
						/>
					</article>

					<article className='input-container'>
						<h4>Replacement Fluid Flow Rate (L/hr)</h4>
						<div className='medication-info-button'></div>
						<input 
							type='number'
							name='replacementFluidFlowRate'
							value={replacementFluidFlowRate}
							onChange={event => this.handleReplacementFluidChange(event)}
						/>
					</article>
				</section>

				<section className='orders-modality-other-container'>
					<h3>Other Fluids/Medications</h3>
				</section>

				<section className='orders-modality-anticoagulation-container'>
					<h3>Anticoagulation</h3>
					<div className='anticoagulation-radio'>
						<label>
							<input 
								type='radio'
								name='anticoagulation'
								value='None'
								checked={modality === 'None'}
								onChange={this.handleModalityChange}
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
								checked={modality === 'Citrate'}
								onChange={this.handleModalityChange}
							/>
							Citrate
						</label>
					</div>
				</section>

				<button 
					className='submit-case-btn' onClick={event => this.submitOrder(event)}>
					Submit Order
				</button>

				<footer className='orders-header'>
					<button className='clear-order-inputs-btn' onClick={this.clearInputs}></button>
				</footer>
			</form>
		)
	}
}

export default OrdersModal;