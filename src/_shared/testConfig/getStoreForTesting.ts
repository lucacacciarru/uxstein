import { configureStore } from '@reduxjs/toolkit';
import { reducer } from '../store/reducer';
import { createRootSaga } from '../store/sagas';
import { CustomOptions } from './types';
import createSagaMiddleware from 'redux-saga';
import { DefaultRootState } from 'react-redux';

const INITIAL_STATE: DefaultRootState = {
  auth: {},
  persona: {
    data: {
      allIds: [],
      byId: {},
    },
  },
  builder: {
    allIds: [],
    byId: {},
    pageSettings: [],
    personaId: '',
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

  sagaMiddleware.run(
    createRootSaga({
      additionalSagas: options?.additionalSagas,
      postAuthOptions: options?.postAuthOptions,
    }),
  );

  return store;
}
