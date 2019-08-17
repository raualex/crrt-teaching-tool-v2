import React from 'react';
import './OrderResultsCard.css';

const OrderResultsCard = ({ date, messages }) => {
	const messageList = messages.map(message => {
		return <li>{message}</li>
	})

	return (
		<div className='OrderResultsCard'>
			<h4>{date}</h4>
			<ul>{messageList}</ul>
			<hr />
		</div>
	)
}

export default OrderResultsCard;