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

	render() {
		return (
			<form class='OrdersModal'>
				<header class='orders-header'>
				</header>

				<section class='orders-modality-container'>
				</section>

				<section class='orders-replacement-fluid-container'>
				</section>

				<section class='orders-modality-other-container'>
				</section>

				<section class='orders-modality-anticoagulation-container'>
				</section>

				<footer class='orders-header'>
				</footer>
			</form>
		)
	}
}

export default OrdersModal;