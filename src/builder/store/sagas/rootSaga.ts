import { takeLatest } from 'redux-saga/effects';
import { createSagaWithLoadingManagement } from '../../../_shared/store/loading';
import { populateBuilderTrigger } from '../actions/populate';
import { populateBuilderSaga } from './populateBuilder';

export function* builderRootSaga() {
  yield takeLatest(
    populateBuilderTrigger,
    createSagaWithLoadingManagement(populateBuilderSaga, {
      key: 'builder',
      dependsOn: ['personas'],
    }),
  );
}
