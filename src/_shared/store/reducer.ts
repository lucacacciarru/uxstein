import { combineReducers } from 'redux';
import { authRootReducer } from '../../auth/store';
import { personaRootReducer } from '../../persona/store/reducers';

export const reducer = combineReducers({
  auth: authRootReducer,
  persona: personaRootReducer,
});
