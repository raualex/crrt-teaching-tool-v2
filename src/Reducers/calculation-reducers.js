const defaultLabDataState = {
  "sodium": [],
  "potassium": [],
  "chloride": [],
  "bicarbonate": [],
  "bun": [],
  "creatinine": [],
  "calcium": [],
  "phosphorous": [],
}
export const calculateLabDataReducer = (
  state = defaultLabDataState, action
) => {
  switch (action.type) {
    case "CALCULATE_LAB_DATA":
      if(action.newLabData) {
        return action.newLabData
      }
      return state;
    default:
      return state;
  }
};
