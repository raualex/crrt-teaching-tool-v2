import { combineReducers } from "redux";
import { isLoadingReducer, hasErroredReducer } from "./general-reducers";
import { selectedModalReducer } from "./selection-reducers";
import {
  ordersReducer,
  timeReducer,
  timeBetweenOrdersReducer,
  validateTimeBetweenOrdersReducer,
  addResultsMessagesToOrderReducer,
  recordHourlyTimestampReducer
} from "./ordersReducers";
import { allCasesReducer, selectedCaseReducer } from "./case-reducers.js";
import { calculateLabDataReducer, setInputOutputReducer } from "./calculation-reducers.js";
import { medicationsReducer } from "./medications-reducer";
import { vitalsReducer } from "./vitals-reducer";

const rootReducer = combineReducers({
  isLoading: isLoadingReducer,
  hasErrored: hasErroredReducer,
  selectedModal: selectedModalReducer,
  orders: ordersReducer,
  time: timeReducer,
  timeBetweenOrders: timeBetweenOrdersReducer,
  timeBetweenOrdersIsValid: validateTimeBetweenOrdersReducer,
  allCases: allCasesReducer,
  selectedCase: selectedCaseReducer,
  labData: calculateLabDataReducer,
  inputOutputData: setInputOutputReducer,
  medications: medicationsReducer,
  vitals: vitalsReducer,
  resultsMessages: addResultsMessagesToOrderReducer,
  hourlyTimestamps: recordHourlyTimestampReducer
});

export default rootReducer;
