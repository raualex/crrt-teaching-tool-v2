import React, { Component } from 'react';
import './OrdersModal.css';

class OrdersModal extends Component {
	constructor(props) {
		super(props);
		this.state = {

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