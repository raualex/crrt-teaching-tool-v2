import React from 'react';
import OrderResultsCard from '../OrderResultsCard';
import './OrderResultsContainer.css';
const uuidv4 = require('uuid/v4');

const OrderResultsContainer = ({ orderResults }) => {
	const mockData = [
		{
			timeStamp: '6:00 PM - Day 1',
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
			timeStamp: '10:00 AM - Day 1',
			mockMessages: [
			'Welcome to the CRRT education application simulator!',
			'Welcome to the CRRT education application simulator!',
			'Welcome to the CRRT education application simulator!'
			]
		}
	]

	// const orderResultsCards = orderResults.map(result => {
	// 	return <OrderResultsCard key={uuidv4()} {...result}/>
	// })

	const mockResultsCards = mockData.map(object => {
		const { timeStamp, mockMessages } = object
		return <OrderResultsCard key={uuidv4()} timeStamp={timeStamp} messages={mockMessages}/>
	})


	return (
		<div className='OrderResultsContainer'>
			<div className='orders-results-sidebar'>
			</div>
			<div className='orders-results-main-content'>
				{/* { orderResultsCards } */}
				{ mockResultsCards }
			</div>
		</div>
	)
}

export default OrderResultsContainer;