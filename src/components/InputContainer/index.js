import React from 'React';
import './InputContainer.css';
import orderDosages from '../../utils/orderDosages.js';
import InputCard from '../../containers/InputCard';

const InputContainer = ({ state, handleNumberChange }) => {
	const { dosagesWithNumValues } = orderDosages
	const inputCards = dosagesWithNumValues.map(medicine => {
		return <InputCard 
							enteredInput={state[medicine]}
							handleNumberChange={handleNumberChange}
							medicine={medicine} 
							dosageErrors={state.dosageErrors}
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