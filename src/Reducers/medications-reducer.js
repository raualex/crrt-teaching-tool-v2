const defaultMedicationState = {
  scheduledMedication: [],
  infusions: []
};

export const medicationsReducer = (state = defaultMedicationState, action) => {
  switch (action.type) {
    case "ADD_MEDICATIONS":
      if (action.medications) {
        return action.medications;
      }
      return state;
    default:
      return state;
  }
};
