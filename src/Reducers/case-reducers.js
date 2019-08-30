export const allCasesReducer = (state = [], action) => {
	switch(action.type) {
		case 'SET_CASES':
			return [...state, action.cases]
		default:
			return state
	}
}