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

	toggleOrdersModal = () => {
		this.setState({ showOrdersModal: !this.state.showOrdersModal })
	}
 
	render() {
		const { showOrdersModal } = this.state;

	  return(
	    <div>
	      <h1>CRRT SIMULATOR!</h1>
	      <div className='form-buttons-container'>
	      	<button 
	      		className='orders-btn form-btn'
	      		onClick={this.toggleOrdersModal}
	      	>Orders</button>
	      	<button className='crrt-display-btn form-btn'>CRRT Display</button>
	      	<button className='restart-case-btn form-btn'>Restart Case</button>
	      </div>
	      { showOrdersModal === true &&
	      	<OrdersModal closeOrdersModal={this.toggleOrdersModal}/>
	      }
	    </div>
	  )
	}
}

export default Simulator;