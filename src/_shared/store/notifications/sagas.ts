import { Action, nanoid, PayloadAction } from '@reduxjs/toolkit';
import { delay, put, takeEvery } from 'redux-saga/effects';
import { SendNotificationPayload } from './types';
import { removeNotification, sendNotification } from './actions';

const resolveActionsToNotify = (action: Action) => {
  return !action.type.match(/(notifications)|(loading)/gi);
};

export function* sendNotificationSaga(action: PayloadAction<any>) {
  const notificationId = nanoid();

  const notification: SendNotificationPayload = {
    id: notificationId,
    actionType: action.type,
    actionPayloadId: action.payload?.id || undefined,
  };

  yield put(sendNotification(notification));
  yield delay(3000);
  yield put(removeNotification(notificationId));
}

export function* notificationsRootSaga() {
  yield takeEvery(resolveActionsToNotify, sendNotificationSaga);
}


