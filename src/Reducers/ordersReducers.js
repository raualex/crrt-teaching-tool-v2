export const ordersReducer = (state = [], action) => {
	switch(action.type) {
		case 'SUBMIT_ORDER':
			return [...state, action.order]
		default:
			return state
	}
}

export const timeReducer = (state = 0, action) => {
	switch(action.type) {
		case 'SET_TIME':
			return action.time
		default:
			return state
	}
}