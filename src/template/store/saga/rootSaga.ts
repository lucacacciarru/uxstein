import { takeLatest } from 'redux-saga/effects';
import { deleteTemplateTrigger } from '../actions/deleteTemplate';
import { fetchTemplatesTrigger } from '../actions/fetchTemplates';
import { updateTemplateTrigger } from '../actions/updateTemplate';
import { deleteTemplateSaga } from './deleteTemplate';
import { fetchTemplatesSaga } from './fetchTemplates';
import { updateTemplateSaga } from './updateTemplate';
import { populateBuilderTrigger } from '../../../builder/store/actions/populate';
import { populateBuilderSaga } from '../../../builder/store/sagas/populateBuilder';
import { createTemplateTrigger } from '../actions/createTemplate';
import { createTemplateSaga } from './createTemplate';

export function* templateRootSaga() {
  yield takeLatest(fetchTemplatesTrigger, fetchTemplatesSaga);
  yield takeLatest(updateTemplateTrigger, updateTemplateSaga);
  yield takeLatest(deleteTemplateTrigger, deleteTemplateSaga);
  yield takeLatest(createTemplateTrigger, createTemplateSaga);
  yield takeLatest(populateBuilderTrigger, populateBuilderSaga);
}
