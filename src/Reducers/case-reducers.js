export const allCasesReducer = (state = [], action) => {
	switch(action.type) {
		case 'SET_CASES':
			return action.cases
		default:
			return state
	}
}