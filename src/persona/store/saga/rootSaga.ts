import { takeLatest } from 'redux-saga/effects';
import { LoadingKeys } from '../../../_shared/store/loading/types';
import { createSagaWithLoadingManagement } from '../../../_shared/store/loading';
import { createPersonaTrigger } from '../actions/createPersona';
import { deletePersonaTrigger } from '../actions/deletePersona';
import { fetchPersonasTrigger } from '../actions/fetchPersonas';
import { updatePersonaTrigger } from '../actions/updatePersona';
import { createPersonaSaga } from './createPersona';
import { deletePersonaSaga } from './deletePersona';
import { fetchPersonaSaga } from './fetchPersonas';
import { updatePersonaSaga } from './updatePersona';

export function* personaRootSaga() {
  yield takeLatest(
    fetchPersonasTrigger,
    fetchPersonaSaga,
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
