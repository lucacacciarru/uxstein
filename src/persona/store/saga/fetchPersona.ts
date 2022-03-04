import { call, put } from 'redux-saga/effects';
import {
  fetchPersonaFailure,
  fetchPersonaRequest,
  fetchPersonaSuccess,
} from '../actions/fetchPersona';
import { fetchPersonaApi } from '../api';
import {
  FetchPersonaAction,
  FetchPersonaResponse,
} from '../types/fetchPersona';

export function* fetchPersonaSaga(action: FetchPersonaAction) {
  yield put(fetchPersonaRequest(action.payload));
  try {
    const response: FetchPersonaResponse = yield call(
      fetchPersonaApi,
      action.payload.username,
    );
    yield put(fetchPersonaSuccess(response.data));
  } catch (error) {
    yield put(fetchPersonaFailure({}));
  }
}
