const defaultVitalsState = {
  temperature: [],
  heartRate: [],
  respiratoryRate: [],
  bloodPressure: [],
  weight: []
};

export const vitalsReducer = (state = defaultVitalsState, action) => {
  switch (action.type) {
    case "ADD_VITALS":
      if (action.vitals) {
        return action.vitals;
      }
      return state;
    default:
      return state;
  }
};
