import { combineReducers } from "redux";
import {
  isLoadingReducer,
  hasErroredReducer,
  setCaseOverReducer
} from "./general-reducers";
import { selectedModalReducer } from "./selection-reducers";
import {
  ordersReducer,
  timeReducer,
  timeBetweenOrdersReducer,
  validateTimeBetweenOrdersReducer,
  addResultsMessagesToOrderReducer,
  recordHourlyTimestampReducer,
  setCurrentPointsReducer,
  setNewOrdersActiveStatusReducer,
  recordSingleOrderTimestampReducer
} from "./ordersReducers";
import { allCasesReducer, selectedCaseReducer } from "./case-reducers.js";
import {
  calculateLabDataReducer,
  setInputOutputReducer
} from "./calculation-reducers.js";
import { medicationsReducer } from "./medications-reducer";
import { vitalsReducer } from "./vitals-reducer";

const rootReducer = combineReducers({
  isLoading: isLoadingReducer,
  hasErrored: hasErroredReducer,
  caseOver: setCaseOverReducer,
  selectedModal: selectedModalReducer,
  orders: ordersReducer,
  time: timeReducer,
  timeBetweenOrders: timeBetweenOrdersReducer,
  timeBetweenOrdersIsValid: validateTimeBetweenOrdersReducer,
  allCases: allCasesReducer,
  selectedCase: selectedCaseReducer,
  newOrdersUnviewed: setNewOrdersActiveStatusReducer,
  labData: calculateLabDataReducer,
  inputOutputData: setInputOutputReducer,
  medications: medicationsReducer,
  vitals: vitalsReducer,
  resultsMessages: addResultsMessagesToOrderReducer,
  totalPoints: setCurrentPointsReducer,
  hourlyTimestamps: recordHourlyTimestampReducer,
  singleOrderTimestamps: recordSingleOrderTimestampReducer
});

export default rootReducer;
