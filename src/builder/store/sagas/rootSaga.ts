import { takeLatest } from 'redux-saga/effects';
import { createSagaWithLoadingManagement } from '../../../_shared/store/loading';
import { LoadingKeys } from '../../../_shared/store/loading/types';
import { populateBuilderTrigger } from '../actions/populate';
import { populateBuilderSaga } from './populateBuilder';

export function* builderRootSaga() {
  yield takeLatest(
    populateBuilderTrigger,
    createSagaWithLoadingManagement(populateBuilderSaga, {
      key: LoadingKeys.builder,
      dependsOn: [LoadingKeys.persona],
    }),
  );
}
