import { call, put } from 'redux-saga/effects';
import { loginFailure } from '../actions/login';
import { logoutRequest, logoutSuccess } from '../actions/logout';
import { logoutApi } from '../api/logout';

export function* logoutSaga() {
  yield put(logoutRequest());
  try {
    yield call(logoutApi);
    yield put(logoutSuccess());
  } catch (error) {
    yield put(loginFailure({}));
  }
}
