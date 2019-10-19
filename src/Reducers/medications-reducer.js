const defaultMedicationState = {
  scheduled: [],
  infusions: []
};

export const medicationsReducer = (state = defaultMedicationState, action) => {
  switch (action.type) {
    case "ADD_MEDICATIONS":
      return action.medications;
    default:
      return state;
  }
};
