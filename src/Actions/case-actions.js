export const setCases = (cases) => ({
  type: 'SET_CASES',
  cases: cases
})

export const selectActiveCase = (activeCase) => ({
  type: 'SELECT_ACTIVE_CASE',
  case: activeCase
})