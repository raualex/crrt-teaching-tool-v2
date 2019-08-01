import { combineReducers } from 'redux';
import { loadingReducer, hasErroredReducer } from './general-reducers';
import { ordersReducer } from './ordersReducers';

const rootReducer = combineReducers({
  isLoading: loadingReducer,
  hasErrored: hasErroredReducer,
  orders: ordersReducer
});

export default rootReducer;