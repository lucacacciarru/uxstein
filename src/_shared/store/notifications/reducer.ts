import { createReducer } from '@reduxjs/toolkit';
import { NotificationsState } from './types';
import * as actions from './actions';

const INITIAL_STATE: NotificationsState = [];

export const notificationsRootReducer = createReducer(INITIAL_STATE, builder => {
  builder
    .addCase(actions.sendNotificationTrigger, (state) => {
      return [...state];
    })
    .addCase(actions.sendNotification, (state, { payload }) => {
      return [{ ...payload }, ...state];
    })
    .addCase(actions.removeNotification, (state, { payload }) => {
      return [...state.filter(notification => notification.id !== payload)];
    })
    .addCase(actions.clearNotifications, () => {
      return [];
    });
});
