import { takeLatest } from 'redux-saga/effects';
import { createSagaWithLoadingManagement } from '../../../_shared/store/loading/utils';
import { deletePersonaTrigger } from '../actions/deletePersona';
import { fetchPersonaTrigger } from '../actions/fetchPersona';
import { deletePersonaSaga } from './deletePersona';
import { fetchPersonaSaga } from './fetchPersona';

export function* personaRootSaga() {
  yield takeLatest(
    fetchPersonaTrigger,
    createSagaWithLoadingManagement(fetchPersonaSaga, { key: 'persona' }),
  );
  yield takeLatest(
    deletePersonaTrigger,
    createSagaWithLoadingManagement(deletePersonaSaga, { key: 'persona' }),
  );
}
