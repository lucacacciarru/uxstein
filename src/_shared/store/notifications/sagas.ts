import { Action, nanoid, PayloadAction } from '@reduxjs/toolkit';
import { delay, put, takeEvery } from 'redux-saga/effects';
import { SendNotificationPayload } from './types';
import { removeNotification, sendNotification } from './actions';

const resolveActionsToNotify = (action: Action) => {
  return action.type.match(/(success)|(failure)/gi);
};

export function* sendNotificationSaga(action: PayloadAction<any>) {
  console.log('ACTION', action.type, action.payload);

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


