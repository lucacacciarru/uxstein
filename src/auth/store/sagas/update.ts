import { call, put } from 'redux-saga/effects';
import { updateRequest, updateSuccess, updateFailure } from '../actions/update';
import { updateProfileApi } from '../api/update';
import {
  UpdateProfileAction,
  UpdateProfileResponse,
} from '../types/updateProfile';

export function* updateProfileSaga(action: UpdateProfileAction) {
  yield put(updateRequest(action.payload));
  try {
    const response: UpdateProfileResponse = yield call(
      updateProfileApi,
      action.payload,
    );
    yield put(updateSuccess(response));
  } catch (error) {
    yield put(updateFailure({ id: action.payload.id }));
  }
}
