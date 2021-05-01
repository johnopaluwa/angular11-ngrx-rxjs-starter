import { createAction, props } from '@ngrx/store';
import { NotificationData } from '../../models/notification';

export const loadNotification = createAction(
  '[Notification] load notification'
);
export const notificationLoaded = createAction(
  '[Notification] notification loaded',
  props<{ notifications: NotificationData[] }>()
);
export const deleteNotification = createAction(
  '[Notification] delete notification',
  props<{ notificationId: string }>()
);

export const notificationDeleted = createAction(
  '[Notification] notification deleted',
  props<{ notificationId: string }>()
);
