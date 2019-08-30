import { combineReducers } from 'redux';
import { isLoadingReducer, hasErroredReducer } from './general-reducers';
import { selectedModalReducer } from './selection-reducers';
import { ordersReducer, timeReducer } from './ordersReducers';
import { allCasesReducer } from './case-reducers.js';

const rootReducer = combineReducers({
  isLoading: isLoadingReducer,
  hasErrored: hasErroredReducer,
  selectedModal: selectedModalReducer,
  orders: ordersReducer,
  currentTime: timeReducer,
  allCases: allCasesReducer
});

export default rootReducer;