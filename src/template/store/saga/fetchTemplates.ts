import { call, put, select } from 'redux-saga/effects';
import { User } from '../../../auth/store';
import { getUserProfile } from '../../../auth/store/selectors';
import { getAuthToken } from '../../../auth/utils';
import { createSagaWithLoadingManagement } from '../../../_shared/store/loading';
import {
  fetchTemplatesFailure,
  fetchTemplatesRequest,
  fetchTemplatesSuccess,
} from '../actions/fetchTemplates';
import { fetchTemplatesApi } from '../api';
import { FetchTemplatesResponse } from '../types/fetchTemplates';

function* fetchTemplatesSagaWorker() {
  const { username }: User = yield select(getUserProfile);

  yield put(fetchTemplatesRequest({ username }));
  try {
    const response: FetchTemplatesResponse = yield call(
      fetchTemplatesApi,
      username,
    );
    yield put(fetchTemplatesSuccess(response.data));
  } catch (error) {
    yield put(fetchTemplatesFailure({}));
  }
}

export const fetchTemplatesSaga = createSagaWithLoadingManagement(
  fetchTemplatesSagaWorker,
  {
    key: 'templates',
  },
);
