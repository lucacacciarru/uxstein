import { call, put } from 'redux-saga/effects';
import { postLogout } from '../actions/init';
import { loginFailure } from '../actions/login';
import { logoutRequest, logoutSuccess } from '../actions/logout';
import { logoutApi } from '../api/logout';

export function* logoutSaga() {
  yield put(logoutRequest());
  try {
    yield call(logoutApi);
    yield put(logoutSuccess());
    yield put(postLogout());
  } catch (error) {
    yield put(loginFailure({}));
  }
}
