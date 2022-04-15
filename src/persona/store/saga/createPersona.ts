import { call, put } from 'redux-saga/effects';
import { createPersonaFailure, createPersonaRequest, createPersonaSuccess } from '../actions/createPersona';
import { createPersonaApi } from '../api/createPersona';
import { CreatePersonaAction, CreatePersonaResponse } from '../types/createPersona';
import { updateBuilder } from '../../../builder/store/actions/update';

export function* createPersonaSaga(action: CreatePersonaAction) {
  yield put(createPersonaRequest(action.payload));
  try {
    const response: CreatePersonaResponse = yield call(
      createPersonaApi,
      action.payload,
    );
    yield put(createPersonaSuccess(response));
    yield put(updateBuilder({ entityId: response.id, entityType: 'persona' }));
  } catch (error) {
    yield put(createPersonaFailure({}));
  }
}
