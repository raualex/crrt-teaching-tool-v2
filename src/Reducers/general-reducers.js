export const isLoadingReducer = (state = false, action) => {
  switch (action.type) {
    case "IS_LOADING":
      return action.isLoading;
    default:
      return state;
  }
};

export const hasErroredReducer = (state = false, action) => {
  switch (action.type) {
    case "HAS_ERRORED":
      return action.hasErrored;
    default:
      return state;
  }
};

export const setCaseOverReducer = (state = false, action) => {
  switch (action.type) {
    case "SET_CASE_OVER":
      return action.caseOver
    default:
      return state;
  }
};