import { takeLatest } from 'redux-saga/effects';
import { createSagaWithLoadingManagement } from '../../../_shared/store/loading/utils';
import { fetchTemplatesTrigger } from '../actions/fetchTemplates';
import { fetchTemplatesSaga } from './fetchTemplates';

export function* templateRootSaga() {
  yield takeLatest(
    fetchTemplatesTrigger,
    createSagaWithLoadingManagement(fetchTemplatesSaga, { key: 'template' }),
  );
}
