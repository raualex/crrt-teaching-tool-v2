import React, { Component } from 'react';
import './Simulator.css';
import OrdersModal from '../OrdersModal';

class Simulator extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showOrdersModal: false
		}
	}

	toggleOrdersModal = event => {
		const { showOrdersModal } = this.state;

		if(showOrdersModal === false) {
			this.setState({ showOrdersModal: true })
		} else if(showOrdersModal === true){
			this.setState({ showOrdersModal: false })
		}
		// Add to Redux state at end of function
	}
 
	render() {
	  return(
	    <div>
	      <h1>CRRT SIMULATOR!</h1>
	      <OrdersModal />
	    </div>
	  )
	}
}

export default Simulator;