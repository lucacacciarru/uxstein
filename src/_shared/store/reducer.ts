import { combineReducers } from 'redux';
import { authRootReducer } from '../../auth/store';

export const reducer = combineReducers({
  auth: authRootReducer,
});
