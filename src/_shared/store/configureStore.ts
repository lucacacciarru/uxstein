import { loginRootReducer } from '../../login/store/reducers/rootReducer';
import { combineReducers } from 'redux';
import { all, fork } from 'redux-saga/effects';
import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';
import { loginRootSaga } from '../../login/store/sagas/rootSaga';

const reducer = combineReducers({
    login: loginRootReducer,
});

const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
    const sagas = [loginRootSaga];
    yield all(sagas.map((saga) => fork(saga)));
}

export const store = configureStore({ reducer, middleware: [sagaMiddleware], devTools: true })
sagaMiddleware.run(rootSaga);