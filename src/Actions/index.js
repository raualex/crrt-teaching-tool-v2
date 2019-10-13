export const isLoading = (bool) => ({
  type: 'IS_LOADING',
  isLoading: bool
})

export const hasErrored = (bool) => ({
  type: 'HAS_ERRORED',
  hasErrored: bool
})

// export const submitOrder = (order) => ({
// 	type: 'SUBMIT_ORDER',
// 	order: order
// })

export const setCaseOver = (bool) => ({
  type: 'SET_CASE_OVER',
  caseOver: bool
})