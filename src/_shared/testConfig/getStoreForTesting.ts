import { configureStore } from '@reduxjs/toolkit';
import { createRootSaga, reducer } from '../store';
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
  template: {
    data: {
      allIds: [],
      byId: {},
    },
  },
  builder: {
    allIds: [],
    byId: {},
    pageSettings: [],
    entityId: '',
    entityType: '',
    title: '',
    globalStyle: {
      backgroundColor: '',
      columnGap: 0,
      rowGap: 0,
      containerPaddingX: 0,
      containerPaddingY: 0,
    },
  },
  loading: {},
  notifications: [],
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
