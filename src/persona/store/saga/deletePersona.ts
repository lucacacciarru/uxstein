import { call, put } from 'redux-saga/effects';
import { deletePersonaFailure, deletePersonaRequest, deletePersonaSuccess } from '../actions/deletePersona';
import { deletePersonaApi } from '../api';
import { DeletePersonaAction, DeletePersonaResponse } from '../types/deletePersona';

export function* deletePersonaSaga(action: DeletePersonaAction) {
  yield put(deletePersonaRequest(action.payload));
  try {
    const response: DeletePersonaResponse = yield call(
      deletePersonaApi,
      action.payload.id,
    );
    yield put(deletePersonaSuccess({ id: response.id }));
  } catch (error) {
    yield put(deletePersonaFailure({ id: action.payload.id }));
  }
}
