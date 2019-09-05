import { calculateLab } from '../utils/labEquations';
import {labDataValues} from '../utils/labDataValues';

const defaultLabDataState = {
  'sodium': [],
  'potassium': [],
  'chloride': [],
  'bicarbonate': [],
  'bun': [],
  'creatinine': [],
  'calcium': [],
  'phosphorous': [],
}

export const calculateLabDataReducer = (state = defaultLabDataState, action) => {
  const { initialValue, time } = action
  switch(action.type) {
    case 'CALCULATE_LAB_DATA':
    // map through labDataValues
    //run calculateLabs on each
    // for each return an object with name and labResult
    //spread returned value for each into corresponding array

    const labDataResults = labDataValues.reduce((updatedLabResults, med) => {
      const { name, dialysate, effluentFlowRate, volumeOfDistribution, productionRate } = med
      const { weight } = state.selectedCase
      const labResult = calculateLab(initialValue, dialysate, effluentFlowRate, time, weight, volumeOfDistribution, productionRate)
      updatedLabResults[name] = [...labResult]
      return updatedLabResults
    }, {})
      return {
        ...state,
        labDataResults
      }
    default:
      return state
  }
}