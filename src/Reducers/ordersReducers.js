const defaultTimeState = {
	currentTime: 10,
	currentDay: 1
}



export const ordersReducer = (state = [], action) => {
	switch(action.type) {
		case 'SUBMIT_ORDER':
			return [...state, action.order]
		default:
			return state
	}
}

export const timeReducer = (state = defaultTimeState, action) => {
	const { currentTime, currentDay } = action
	switch(action.type) {
		case 'SET_TIME':
			return {
				currentTime, 
				currentDay
			}
			default:
				return state
			}
		}

export const timeBetweenOrdersReducer = (state = 0, action) => {
	switch(action.type) {
		case 'SET_TIME_BETWEEN_ORDERS':
			return action.timeBetweenOrders
		default:
			return state
	}
}