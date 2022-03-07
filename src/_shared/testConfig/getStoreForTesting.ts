import { configureStore } from '@reduxjs/toolkit';
import { reducer } from '../store/reducer';
import { createRootSaga } from '../store/sagas';
import { CustomOptions } from './types';
import createSagaMiddleware from 'redux-saga';
import { DefaultRootState } from 'react-redux';

const INITIAL_STATE: DefaultRootState = {
  auth: {},
  persona: {},
  builder: {
    allIds: [],
    byId: {},
    pageSettings: [],
  },
  loading: {},
};

const sagaMiddleware = createSagaMiddleware();

export function getStoreForTesting(options?: CustomOptions) {
  const state = { ...INITIAL_STATE, ...options?.mocks };

  const store = configureStore({
    reducer,
    middleware: [sagaMiddleware],
    preloadedState: state,
  });

  sagaMiddleware.run(createRootSaga(options?.additionalSagas));

  return store;
}
