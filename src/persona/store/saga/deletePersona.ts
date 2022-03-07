import { call, put } from 'redux-saga/effects';
import {
  deletePersonaRequest,
  deletePersonaSuccess,
} from '../actions/deletePersona';
import { fetchPersonaFailure } from '../actions/fetchPersona';
import { deletePersonaApi } from '../api/deletePersona';
import {
  DeletePersonaAction,
  DeletePersonaResponse,
} from '../types/deletePersona';

export function* deletePersonaSaga(action: DeletePersonaAction) {
  yield put(deletePersonaRequest(action.payload));
  try {
    const response: DeletePersonaResponse = yield call(
      deletePersonaApi,
      action.payload.id,
    );
    yield put(deletePersonaSuccess(response.id));
  } catch (error) {
    yield put(fetchPersonaFailure({}));
  }
}
