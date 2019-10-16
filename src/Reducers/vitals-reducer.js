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
      return action.vitals;
    default:
      return state;
  }
};
