import React, { Component } from 'React';
import './InputCard.css';
import orderDosages from '../../utils/orderDosages.js';

class InputCard extends Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}

	render() {
		const { enteredInput, handleNumberChange, medicine, dosageErrors } = this.props;
		const { errorMessages, dosageNames } = orderDosages;

		return (
			<article className='input-container'>
				<div className='header-info-container'>
					<h4>{ dosageNames[medicine] }</h4>
					<a 
						href='https://github.com/raualex/crrt-teaching-tool-v2' 
						className='textbook-link'
					>
						<i className='far fa-question-circle'></i>
					</a>
				</div>

				<input 
					type='text'
					name={medicine}
					value={isNaN(`${medicine}`) ? 0 : {medicine}}
					onChange={event => handleNumberChange(event)}
				/>
				<div className='input-error-container'>
					<p className='input-error-text'>{
						dosageErrors.includes({medicine}) ? errorMessages[medicine] : ''
					}
					</p>
				</div>
			</article>
		)
	}
}

export default InputCard;