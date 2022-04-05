import { takeLatest } from 'redux-saga/effects';
import { deleteTemplateTrigger } from '../actions/deleteTemplate';
import { fetchTemplatesTrigger } from '../actions/fetchTemplates';
import { updateTemplateTrigger } from '../actions/updateTemplate';
import { deleteTemplateSaga } from './deleteTemplate';
import { fetchTemplatesSaga } from './fetchTemplates';
import { updateTemplateSaga } from './updateTemplate';
import { populateBuilderFromTemplateTrigger } from '../actions/populateBuilderFromTemplate';
import { populateBuilderFromTemplateSaga } from './populateBuilderFromTemplate';

export function* templateRootSaga() {
  yield takeLatest(fetchTemplatesTrigger, fetchTemplatesSaga);
  yield takeLatest(updateTemplateTrigger, updateTemplateSaga);
  yield takeLatest(deleteTemplateTrigger, deleteTemplateSaga);
  yield takeLatest(populateBuilderFromTemplateTrigger, populateBuilderFromTemplateSaga);
}
