import { NotificationData } from '@app/shell-authenticated/models/notification';
import { NotificationStatus } from '@app/shell-authenticated/models/notification-status';
export const testEmptyNotification = new NotificationData(
  new Date(),
  '',
  '',
  false,
  NotificationStatus.Old
);
