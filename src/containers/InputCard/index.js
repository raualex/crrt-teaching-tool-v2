import React, { Component } from 'react';
import './InputCard.css';
import orderDosages from '../../utils/orderDosages.js';

class InputCard extends Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}

	render() {
		const { type, enteredInput, handleNumberChange, medicine, dosageErrors } = this.props;
		const { errorMessages, dosageNames } = orderDosages;

		return (
				<article className='input-container'>
					{ type === 'text' &&
							<div className='InputCard-text'>
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
									value={isNaN(enteredInput) ? 0 : enteredInput}
									onChange={event => handleNumberChange(event)}
								/>
								<div className='input-error-container'>
									<p className='input-error-text'>{
										dosageErrors.includes(medicine) ? errorMessages[medicine] : ''
									}
									</p>
								</div>
							</div>
					}

					{
						type === 'radio' &&
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
					}
				</article>
		)
	}
}

export default InputCard;