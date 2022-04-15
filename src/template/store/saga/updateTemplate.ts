import { call, put } from 'redux-saga/effects';
import { updateTemplateFailure, updateTemplateRequest, updateTemplateSuccess } from '../actions/updateTemplate';
import { updateTemplateApi } from '../api/updateTemplate';
import { UpdateTemplateAction, UpdateTemplateResponse } from '../types/updateTemplate';

export function* updateTemplateSaga(action: UpdateTemplateAction) {
  yield put(updateTemplateRequest(action.payload));
  try {
    const response: UpdateTemplateResponse = yield call(
      updateTemplateApi,
      action.payload,
    );
    yield put(updateTemplateSuccess(response));
  } catch (error) {
    yield put(updateTemplateFailure({}));
  }
}
