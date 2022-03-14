import { call, put } from 'redux-saga/effects';
import { getAuthToken } from '../../utils';
import { loginFailure, loginSuccess } from '../actions/login';
import { loginWithToken } from '../api';
import { LoginResponse } from '../types';

export function* init() {
  const token = getAuthToken();

  if (!token) {
    return;
  }

  try {
    const response: LoginResponse = yield call(loginWithToken, token);
    yield put(loginSuccess(response.data));
  } catch (e) {
    yield put(loginFailure({}));
  }
}
