import { combineReducers } from 'redux';
import { loginRootReducer } from '../../auth/store';

export const reducer = combineReducers({
  login: loginRootReducer,
});
