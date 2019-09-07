import { combineReducers } from "redux";
import { isLoadingReducer, hasErroredReducer } from "./general-reducers";
import { selectedModalReducer } from "./selection-reducers";
import {
  ordersReducer,
  timeReducer,
  timeBetweenOrdersReducer,
  validateTimeBetweenOrdersReducer
} from "./ordersReducers";
import { allCasesReducer, selectedCaseReducer } from "./case-reducers.js";
import { calculateLabDataReducer } from "./calculation-reducers.js";

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
  labData: calculateLabDataReducer
});

export default rootReducer;
