import { call } from 'redux-saga/effects';
import { removeAuthToken, setAuthToken } from '../../utils';
import { PostLoginAction } from '../types';

export function* setAuthTokenSaga({ payload }: PostLoginAction) {
  const { token = '' } = payload;
  yield call(setAuthToken, token);
}

export function* removeAuthTokenSaga() {
  yield call(removeAuthToken);
}
