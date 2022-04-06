import { takeLatest } from 'redux-saga/effects';
import { LoadingKeys } from '../../../_shared/store/loading/types';
import { createSagaWithLoadingManagement } from '../../../_shared/store/loading/utils';
import { createPersonaTrigger } from '../actions/createPersona';
import { deletePersonaTrigger } from '../actions/deletePersona';
import { fetchPersonaTrigger } from '../actions/fetchPersona';
import { updatePersonaTrigger } from '../actions/updatePersona';
import { createPersonaSaga } from './createPersona';
import { deletePersonaSaga } from './deletePersona';
import { fetchPersonaSaga } from './fetchPersona';
import { updatePersonaSaga } from './updatePersona';

export function* personaRootSaga() {
  yield takeLatest(
    fetchPersonaTrigger,
    createSagaWithLoadingManagement(fetchPersonaSaga, { key: LoadingKeys.persona }),
  );
  yield takeLatest(
    deletePersonaTrigger,
    createSagaWithLoadingManagement(deletePersonaSaga, { key: LoadingKeys.persona }),
  );
  yield takeLatest(
    updatePersonaTrigger,
    createSagaWithLoadingManagement(updatePersonaSaga, { key: LoadingKeys.persona }),
  );
  yield takeLatest(
    createPersonaTrigger,
    createSagaWithLoadingManagement(createPersonaSaga, { key: LoadingKeys.persona }),
  );
}
