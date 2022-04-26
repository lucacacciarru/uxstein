import { call, put, select } from 'redux-saga/effects';
import { createSagaWithLoadingManagement } from '../../../_shared/store/loading';
import { LoadingKeys } from '../../../_shared/store/loading/types';
import { fetchPersonasFailure, fetchPersonasRequest, fetchPersonasSuccess } from '../actions/fetchPersonas';
import { fetchPersonaApi } from '../api';
import { FetchPersonasResponse } from '../types/fetchPersonas';
import { User } from '../../../auth/store';
import { getUserProfile } from '../../../auth/store/selectors';

function* fetchPersonaSagaWorker() {
  const { username }: User = yield select(getUserProfile);

  yield put(fetchPersonasRequest({ username }));
  try {
    const personas: FetchPersonasResponse = yield call(
      fetchPersonaApi,
      username,
      );
    yield put(fetchPersonasSuccess(personas));
  } catch (error) {
    yield put(fetchPersonasFailure([]));
  }
}

export const fetchPersonaSaga = createSagaWithLoadingManagement(
  fetchPersonaSagaWorker,
  {
    key: LoadingKeys.persona,
  },
);
