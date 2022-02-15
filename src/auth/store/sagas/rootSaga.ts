// TODO: API ERROR
import { takeLatest } from 'redux-saga/effects';
import { loginTrigger } from '../actions/login';
import { logoutTrigger } from '../actions/logout';
import { loginSaga } from './login';
import { logoutSaga } from './logout';

export function* authRootSaga() {
  yield takeLatest(loginTrigger, loginSaga);
  yield takeLatest(logoutTrigger, logoutSaga);
}
