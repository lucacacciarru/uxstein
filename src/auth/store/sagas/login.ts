import { put, call } from 'redux-saga/effects';
import { loginFailure, loginRequest, loginSuccess } from '../actions/login';
import { loginWithEmailAndPassword } from '../api/login';
import { LoginAction, LoginResponse } from '../types/login';

export function* loginSaga(action: LoginAction) {
  yield put(loginRequest(action.payload));
  try {
    const response: LoginResponse = yield call(
      loginWithEmailAndPassword,
      action.payload.email,
      action.payload.password,
    );
    yield put(loginSuccess(response.data));
  } catch (error) {
    yield put(loginFailure({}));
  }
}
