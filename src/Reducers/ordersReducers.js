export const ordersReducer = (state = [], action) => {
	switch(action.type) {
		case 'SUBMIT_ORDER':
			return [...state, action.order]
		default:
			return state
	}
}