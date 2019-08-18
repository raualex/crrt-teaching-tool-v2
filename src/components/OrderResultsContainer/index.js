import React from 'react';
import OrderResultsCard from '../OrderResultsCard';
import './OrderResultsContainer.css';
const uuidv4 = require('uuid/v4');

const OrderResultsContainer = (props) => {
	const mockData = [
		{
			mockDate: '6:00 PM - Day 1',
			mockMessages: [
			'The patient’s filter clotted twice, and was replaced.',
			'The patient’s filter clotted twice, and was replaced.',
			'The patient’s filter clotted twice, and was replaced.',
			'The patient’s filter clotted twice, and was replaced.',
			'The patient’s filter clotted twice, and was replaced.',
			'The patient’s filter clotted twice, and was replaced.'
			]
		},
		{
			mockDate: '10:00 AM - Day 1',
			mockMessages: [
			'Welcome to the CRRT education application simulator!',
			'Welcome to the CRRT education application simulator!',
			'Welcome to the CRRT education application simulator!'
			]
		}
	]

	const mockResultsCards = mockData.map(object => {
		const { mockDate, mockMessages } = object
		return <OrderResultsCard key={uuidv4()} date={mockDate} messages={mockMessages}/>
	})


	return (
		<div className='OrderResultsContainer'>
			{ mockResultsCards }
		</div>
	)
}

export default OrderResultsContainer;