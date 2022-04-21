export type Notification = {
  id: string;
  actionType: string;
  actionPayloadId: string | undefined;
}

export enum NOTIFICATION_ACTION_TYPES {
  TRIGGER = 'notifications/trigger',
  SEND = 'notifications/send',
  REMOVE = 'notifications/remove',
  CLEAR = 'notifications/clear'
}

export type SendNotificationPayload = Notification;
export type RemoveNotificationPayload = string;

export type NotificationsState = Notification[];
