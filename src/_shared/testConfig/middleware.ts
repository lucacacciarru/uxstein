import { sagas } from '../store/sagas';
import { all, fork } from 'redux-saga/effects';
import createSagaMiddleware from 'redux-saga';

export const sagaMiddleware = createSagaMiddleware();

export function* rootSaga() {
    yield all(sagas.map(saga => fork(saga)));
}