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
import { createSagaWithLoadingManagement } from '../../../_shared/store/loading';
import { LoadingKeys } from '../../../_shared/store/loading/types';

export function* templateRootSaga() {
  yield takeLatest(
    fetchTemplatesTrigger,
    fetchTemplatesSaga);
  yield takeLatest(
    updateTemplateTrigger,
    createSagaWithLoadingManagement(updateTemplateSaga, { key: LoadingKeys.template }));
  yield takeLatest(
    deleteTemplateTrigger,
    createSagaWithLoadingManagement(deleteTemplateSaga, { key: LoadingKeys.template }));
  yield takeLatest(
    createTemplateTrigger,
    createSagaWithLoadingManagement(createTemplateSaga, { key: LoadingKeys.template }));
  yield takeLatest(
    populateBuilderTrigger,
    populateBuilderSaga);
}
