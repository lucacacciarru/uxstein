import { call, put } from 'redux-saga/effects';
import {
  fetchTemplatesFailure,
  fetchTemplatesRequest,
  fetchTemplatesSuccess,
} from '../actions/fetchTemplates';
import { fetchTemplatesApi } from '../api';
import {
  FetchTemplatesAction,
  FetchTemplatesResponse
} from '../types/fetchTemplates';

export function* fetchTemplatesSaga(action: FetchTemplatesAction) {
  yield put(fetchTemplatesRequest(action.payload));
  try {
    const response: FetchTemplatesResponse = yield call(
      fetchTemplatesApi,
      action.payload.username,
    );
    yield put(fetchTemplatesSuccess(response.data));
  } catch (error) {
    yield put(fetchTemplatesFailure({}));
  }
}
