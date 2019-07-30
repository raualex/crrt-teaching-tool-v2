import React, { Component } from 'react';
import './OrdersModal.css';

class OrdersModal extends Component {
	constructor(props) {
		super(props);
		this.state = {
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
		}
	}

	handleChange = event => {
		const { name, value } = event.target
		this.setState({ [name]: value })
	}

	submitOrder = event => {
			
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
				</section>

				<section className='orders-replacement-fluid-container'>
					<h3>Replacement Fluid</h3>
					<article className='input-container'>
						<h4>Sodium</h4>
						<div className='medication-info-button'></div>
						<input 
							type='number'
							placeholder='Sodium'
							name='sodium'
							value={sodium}
							onChange={event => this.handleChange(event)}
						/>
					</article>
				</section>

				<section className='orders-modality-other-container'>
				</section>

				<section className='orders-modality-anticoagulation-container'>
				</section>

				<button 
					className='submit-case-btn' onClick={event => this.submitOrder(event)}>
					Submit Order
				</button>

				<footer className='orders-header'>
				</footer>
			</form>
		)
	}
}

export default OrdersModal;