import { call, put } from 'redux-saga/effects';
import {
  fetchPersonaFailure,
  fetchPersonaRequest,
  fetchPersonaSuccess,
} from '../actions/fetchPersona';
import { fetchPersonaApi } from '../api';
import { FetchPersonaResponse } from '../types/fetchPersona';

export function* fetchPersonaSaga() {
  yield put(fetchPersonaRequest());
  try {
    const response: FetchPersonaResponse = yield call(fetchPersonaApi);
    yield put(fetchPersonaSuccess(response.data));
  } catch (error) {
    yield put(fetchPersonaFailure({}));
  }
}
