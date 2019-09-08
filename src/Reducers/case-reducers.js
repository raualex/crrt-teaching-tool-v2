export const allCasesReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_CASES":
      return action.cases;
    default:
      return state;
  }
};

export const selectedCaseReducer = (state = {}, action) => {
  switch (action.type) {
    case "SELECT_ACTIVE_CASE":
      return action.case;
    default:
      return state;
  }
};
