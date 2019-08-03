import React from 'react';
import './InputContainer.css';
import orderDosages from '../../utils/orderDosages.js';
import InputCard from '../../containers/InputCard';

const InputContainer = ({ type, currentInputState, handleInputChange, dosagesToDisplay }) => {

	const  inputCards = dosagesToDisplay.map(dosage => {
			return <InputCard 
								type={type}
								currentInput={type === 'text' ? currentInputState[dosage] : currentInputState}
								handleInputChange={handleInputChange}
								dosage={dosage} 
								dosageErrors={currentInputState.dosageErrors}
								key={dosage}
							/>
	})

	return (
		<div className='InputContainer'>
			{ inputCards }
		</div>
	)
}

export default InputContainer;