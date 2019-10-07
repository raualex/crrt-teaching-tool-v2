const defaultLabDataState = {
  sodium: [],
  potassium: [],
  chloride: [],
  bicarbonate: [],
  bun: [],
  creatinine: [],
  calcium: [],
  ionizedCalcium: [],
  magnesium: [],
  phosphorous: [],
  ph: [],
  filtrationFraction: [],
  calciumFinalPostFilter: [],
  lactate: [],
  albumin: [],
  wbc: [],
  hemoglobin: [],
  hematocrit: [],
  plateletCount: [],
  pc02: [],
  granularCasts: [],
  renalEpithelialCasts: [],
  bloodCulture: [],
  urineCulture: []
};

export const calculateLabDataReducer = (
  state = defaultLabDataState,
  action
) => {
  switch (action.type) {
    case "CALCULATE_LAB_DATA":
      if (action.newLabData) {
        return action.newLabData;
      }
      return state;
    default:
      return state;
  }
};

export const setInputOutputReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_INPUT_OUTPUT_DATA":
      return action.newInputOutput;
    default:
      return state;
  }
}