import { combineReducers } from 'redux';
import { isLoading, hasErrored } from './general-reducers';
import { selectedModal } from './selection-reducers';

const rootReducer = combineReducers({
  isLoading,
  hasErrored,
  selectedModal
});

export default rootReducer;