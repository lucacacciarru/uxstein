import { call, put } from 'redux-saga/effects';
import { createSagaWithLoadingManagement } from '../../../_shared/store/loading';
import {
  fetchPersonaFailure,
  fetchPersonaRequest,
  fetchPersonaSuccess,
} from '../actions/fetchPersona';
import { fetchPersonaApi } from '../api';
import { FetchPersonaResponse } from '../types/fetchPersona';

function* fetchPersonaSagaWorker() {
  yield put(fetchPersonaRequest());
  try {
    const response: FetchPersonaResponse = yield call(fetchPersonaApi);
    yield put(fetchPersonaSuccess(response.data));
  } catch (error) {
    yield put(fetchPersonaFailure({}));
  }
}

export const fetchPersonaSaga = createSagaWithLoadingManagement(
  fetchPersonaSagaWorker,
  {
    key: 'personas',
  }
)