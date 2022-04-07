import { call, put } from 'redux-saga/effects';
import { createTemplateFailure, createTemplateRequest, createTemplateSuccess } from '../actions/createTemplate';
import { createTemplateApi } from '../api/createTemplate';
import { CreateTemplateAction, CreateTemplateResponse } from '../types/createTemplate';

export function* createTemplateSaga(action: CreateTemplateAction) {
  yield put(createTemplateRequest(action.payload));
  try {
    const response: CreateTemplateResponse = yield call(
      createTemplateApi,
      action.payload,
    );
    yield put(createTemplateSuccess(response));
  } catch (error) {
    yield put(createTemplateFailure({}));
  }
}
