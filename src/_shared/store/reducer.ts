import { combineReducers } from 'redux';
import { loginRootReducer } from '../../login/store';

export const reducer = combineReducers({
  login: loginRootReducer,
});
