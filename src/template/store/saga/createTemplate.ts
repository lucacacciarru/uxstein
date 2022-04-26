import { call, put } from 'redux-saga/effects';
import { createTemplateFailure, createTemplateRequest, createTemplateSuccess } from '../actions/createTemplate';
import { createTemplateApi } from '../api/createTemplate';
import { CreateTemplateAction, CreateTemplateResponse } from '../types/createTemplate';
import { updateBuilder } from '../../../builder/store/actions/update';

export function* createTemplateSaga(action: CreateTemplateAction) {
  yield put(createTemplateRequest(action.payload));
  try {
    const response: CreateTemplateResponse = yield call(
      createTemplateApi,
      action.payload,
    );
    yield put(createTemplateSuccess(response));
    yield put(updateBuilder({ entityId: response.id, entityType: 'template' }));
  } catch (error) {
    yield put(createTemplateFailure({ id: action.payload.id }));
  }
}
