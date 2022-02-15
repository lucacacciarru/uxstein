// TODO: API ERROR
import { takeLatest } from 'redux-saga/effects';
import { loginTrigger } from '../actions/login';
import { loginSaga } from './login';

export function* loginRootSaga() {
  yield takeLatest(loginTrigger, loginSaga);
}
