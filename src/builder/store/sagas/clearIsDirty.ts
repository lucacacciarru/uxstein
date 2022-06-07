import { PayloadAction } from '@reduxjs/toolkit';
import { put, select } from 'redux-saga/effects';
import { updateBuilder } from '../actions/update';
import { getIsDirty } from '../selectors/getIsDirty';

export function* clearIsDirty(action: PayloadAction<any>) {
  const isDirty: boolean = yield select(getIsDirty);
  if (isDirty) {
    yield put(updateBuilder({ isDirty: false }));
  }
}
