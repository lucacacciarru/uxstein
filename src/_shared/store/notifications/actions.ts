import { createAction } from '@reduxjs/toolkit';
import {
  SendNotificationPayload,
  RemoveNotificationPayload,
  NOTIFICATION_ACTION_TYPES,
} from './types';

export const sendNotificationTrigger = createAction<void,
  NOTIFICATION_ACTION_TYPES.TRIGGER>
(NOTIFICATION_ACTION_TYPES.TRIGGER);

export const sendNotification = createAction<SendNotificationPayload,
  NOTIFICATION_ACTION_TYPES.SEND>
(NOTIFICATION_ACTION_TYPES.SEND);

export const removeNotification = createAction<RemoveNotificationPayload,
  NOTIFICATION_ACTION_TYPES.REMOVE>
(NOTIFICATION_ACTION_TYPES.REMOVE);

export const clearNotifications = createAction<void,
  NOTIFICATION_ACTION_TYPES.CLEAR>
(NOTIFICATION_ACTION_TYPES.CLEAR);
