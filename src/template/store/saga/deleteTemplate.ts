import { call, put } from 'redux-saga/effects';
import {
  deleteTemplateRequest,
  deleteTemplateSuccess,
} from '../actions/deleteTemplate';
import { fetchTemplatesFailure } from '../actions/fetchTemplates';
import { deleteTemplateApi } from '../api/deleteTemplate';
import {
  DeleteTemplateAction,
  DeleteTemplateResponse,
} from '../types/deleteTemplate';

export function* deleteTemplateSaga(action: DeleteTemplateAction) {
  yield put(deleteTemplateRequest(action.payload));
  try {
    const response: DeleteTemplateResponse = yield call(
      deleteTemplateApi,
      action.payload.id,
    );
    yield put(deleteTemplateSuccess(response.id));
  } catch (error) {
    yield put(fetchTemplatesFailure({}));
  }
}
