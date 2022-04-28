import { call, put } from 'redux-saga/effects';
import { updatePersonaApi } from '../api';
import { updatePersonaFailure, updatePersonaRequest, updatePersonaSuccess } from '../actions/updatePersona';
import { UpdatePersonaAction, UpdatePersonaResponse } from '../types/updatePersona';

export function* updatePersonaSaga(action: UpdatePersonaAction) {
  yield put(updatePersonaRequest(action.payload));
  try {
    const response: UpdatePersonaResponse = yield call(
      updatePersonaApi,
      action.payload,
    );
    yield put(updatePersonaSuccess(response));
  } catch (error) {
    yield put(updatePersonaFailure({ id: action.payload.id }));
  }
}
