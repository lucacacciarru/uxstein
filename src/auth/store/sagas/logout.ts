import { call, put } from 'redux-saga/effects';
import { loginFailure } from '../actions/login';
import { logoutRequest, logoutSuccess } from '../actions/logout';
import { logoutApi } from '../api/logout';
import { LogoutAction, LogoutResponse } from '../types';

export function* logoutSaga(action: LogoutAction) {
  yield put(logoutRequest(action.payload));
  try {
    const response: LogoutResponse = yield call(logoutApi);
    yield put(logoutSuccess(response));
  } catch (error) {
    yield put(loginFailure({}));
  }
}
