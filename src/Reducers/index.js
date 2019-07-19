import { combineReducers } from 'redux';
import { isLoading, hasErrored } from './general-reducers';

const rootReducer = combineReducers({
  isLoading,
  hasErrored
});

export default rootReducer;