import { DefaultRootState } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';

const getNotificationsState = (state: DefaultRootState) => {
  return state.notifications;
};

export const getLastNotification = createSelector(getNotificationsState,
  (notifications) => notifications[notifications.length -1 ]);
