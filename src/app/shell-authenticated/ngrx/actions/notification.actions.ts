import { ReportProgress } from '@app/root/helpers/report-progress';
import { createAction, props } from '@ngrx/store';
import { NotificationData } from '../../models/notification';

export const loadNotification = createAction(
  '[Notification] load notification',
  props<{ reportProgress: ReportProgress }>()
);
export const notificationLoaded = createAction(
  '[Notification] notification loaded',
  props<{ notifications: NotificationData[] }>()
);
export const deleteNotification = createAction(
  '[Notification] delete notification',
  props<{ notification: NotificationData; reportProgress: ReportProgress }>()
);

export const notificationDeleted = createAction(
  '[Notification] notification deleted',
  props<{ notification: NotificationData }>()
);

export const notificationSeen = createAction(
  '[Notification] notification seen',
  props<{ notification: NotificationData }>()
);

export const manyNotificationSeen = createAction(
  '[Notification] many notification seen',
  props<{ notifications: NotificationData[] }>()
);
