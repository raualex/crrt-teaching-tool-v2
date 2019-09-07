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
        // const labDataKeys = Object.keys(state)

        // const updatedLabData = labDataKeys.reduce((newLabs, medication) => {
        //   if(!newLabs[medication]) {
        //     newLabs[medication] = []
        //   }
        //     console.log('state[medication]: ', state[medication])
        //     console.log('action.newLabData[medication]: ', action.newLabData[medication])
        //     const newState = [...state[medication], action.newLabData[medication]]
        //     newLabs[medication].push(newState)
          
        //   return newLabs
        // }, {})
        // console.log('updatedLabData: ', updatedLabData)
        // return updatedLabData
        return action.newLabData
      }
      return state;
    default:
      return state;
  }
};
