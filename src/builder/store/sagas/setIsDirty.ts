import { PayloadAction } from '@reduxjs/toolkit';
import { put, select } from 'redux-saga/effects';
import { updateBuilder } from '../actions/update';
import { getIsDirty } from '../selectors/getIsDirty';

export function* setIsDirty(action: PayloadAction<any>) {
  const isDirty: boolean = yield select(getIsDirty);

  if (action.payload.isDirty === undefined && !isDirty) {
    yield put(updateBuilder({ isDirty: true }));
  }
}
