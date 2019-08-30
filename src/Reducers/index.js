import { combineReducers } from 'redux';
import { isLoadingReducer, hasErroredReducer } from './general-reducers';
import { selectedModalReducer } from './selection-reducers';
import { ordersReducer, timeReducer, timeBetweenOrdersReducer } from './ordersReducers';

const rootReducer = combineReducers({
  isLoading: isLoadingReducer,
  hasErrored: hasErroredReducer,
  selectedModal: selectedModalReducer,
  orders: ordersReducer,
  time: timeReducer,
  timeBetweenOrders: timeBetweenOrdersReducer
});

export default rootReducer;