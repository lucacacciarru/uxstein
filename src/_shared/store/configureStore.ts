import { all, fork } from 'redux-saga/effects';
import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';
import { sagas, reducer } from '.';

const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
  yield all(sagas.map(saga => fork(saga)));
}

export const store = configureStore({
  reducer,
  middleware: [sagaMiddleware],
  devTools: true,
});

sagaMiddleware.run(rootSaga);
