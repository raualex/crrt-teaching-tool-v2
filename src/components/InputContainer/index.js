import React from 'react';
import './InputContainer.css';
import orderDosages from '../../utils/orderDosages.js';
import InputCard from '../../containers/InputCard';

const InputContainer = ({ type, allInputs, handleNumberChange }) => {
	let inputCards;
	const { dosagesWithNumValues } = orderDosages
	if(type === 'text') {
		inputCards = dosagesWithNumValues.map(medicine => {
				return <InputCard 
									type={type}
									enteredInput={allInputs[medicine]}
									handleNumberChange={handleNumberChange}
									medicine={medicine} 
									dosageErrors={allInputs.dosageErrors}
									key={medicine}
								/>
		})
	} else if(type === 'radio') {
			inputCards = dosagesWithNumValues.map(medicine => {
					return <InputCard 
										type={type}
										enteredInput={allInputs[medicine]}
										handleNumberChange={handleNumberChange}
										medicine={medicine} 
										dosageErrors={allInputs.dosageErrors}
										key={medicine}
									/>
			})		
	}

	return (
		<div className='InputContainer'>
			{ inputCards }
		</div>
	)
}

export default InputContainer;