import React from 'react';
import './InputContainer.css';
import orderDosages from '../../utils/orderDosages.js';
import InputCard from '../../containers/InputCard';

const InputContainer = ({ type, currentInputState, handleInputChange }) => {
	const { dosagesWithNumValues } = orderDosages
	
	const  inputCards = dosagesWithNumValues.map(medicine => {
			return <InputCard 
								type={type}
								currentInput={currentInputState[medicine]}
								handleInputChange={handleInputChange}
								medicine={medicine} 
								dosageErrors={currentInputState.dosageErrors}
								key={medicine}
							/>
	})

	return (
		<div className='InputContainer'>
			{ inputCards }
		</div>
	)
}

export default InputContainer;