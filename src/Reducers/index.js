import { combineReducers } from 'redux';
import { isLoading, hasErrored } from './general-reducers';
import { selectedModal } from './selection-reducers';
import { ordersReducer } from './ordersReducers';

const rootReducer = combineReducers({
  isLoading,
  hasErrored,
  selectedModal,
  orders: ordersReducer
});

export default rootReducer;