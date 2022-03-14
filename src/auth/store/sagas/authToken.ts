import { call, put } from 'redux-saga/effects';
import { removeAuthToken, setAuthToken } from '../../utils';
import { LoginSuccessAction } from '../types';

export function* setAuthTokenSaga({ payload }: LoginSuccessAction) {
  const { token = '' } = payload;
  yield call(setAuthToken, token);
}

export function* removeAuthTokenSaga() {
  yield call(removeAuthToken);
}
