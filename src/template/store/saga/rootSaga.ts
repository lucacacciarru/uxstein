import { takeLatest } from 'redux-saga/effects';
import { fetchTemplatesTrigger } from '../actions/fetchTemplates';
import { fetchTemplatesSaga } from './fetchTemplates';

export function* templateRootSaga() {
  yield takeLatest(fetchTemplatesTrigger, fetchTemplatesSaga);
}
