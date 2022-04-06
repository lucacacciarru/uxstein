import { combineReducers } from 'redux';
import { builderRootReducer } from '../../builder/store';
import { authRootReducer } from '../../auth/store';
import { personaRootReducer } from '../../persona/store/reducers';
import { LOADING_REDUCER_KEY, loadingRootReducer } from './loading/reducer';
import { templateRootReducer } from '../../template/store/reducers';

const reducers = {
  auth: authRootReducer,
  persona: personaRootReducer,
  builder: builderRootReducer,
  template: templateRootReducer,
  [LOADING_REDUCER_KEY]: loadingRootReducer,
};

declare module 'react-redux' {
  type LocalRootReducers = {
    [K in keyof typeof reducers]: ReturnType<typeof reducers[K]>;
  };

  export interface DefaultRootState extends LocalRootReducers { }
}

export const reducer = combineReducers(reducers);
