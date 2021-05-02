import { NotificationStatus } from '@app/shell-authenticated/models/notification-status';
import { createReducer, on } from '@ngrx/store';
import { includes, isEqual, orderBy } from 'lodash';
import { NotificationData } from '../../models/notification';
import {
  manyNotificationSeen,
  notificationDeleted,
  notificationLoaded,
  notificationSeen,
} from '../actions/notification.actions';

export interface NotificationState {
  data: NotificationData[];
}

export type State = NotificationState;

export const initialState: State = {
  data: [],
};

export const reducer = createReducer(
  initialState,
  on(notificationLoaded, (state, { notifications }) => ({
    ...state,
    data: orderBy(notifications, (s) => s.date, 'desc'),
  })),
  on(notificationDeleted, (state, { notification }) => ({
    ...state,
    data: orderBy(
      state.data.filter(
        (s) =>
          s.active !== notification.active ||
          s.date !== notification.date ||
          s.title !== notification.title ||
          s.desc !== notification.desc ||
          s.status !== notification.status
      ),
      (s) => s.date,
      'desc'
    ),
  })),

  on(notificationSeen, (state, { notification }) => ({
    ...state,
    data: state.data.map((s) => {
      if (
        s.active === notification.active &&
        s.title === notification.title &&
        s.desc === notification.desc &&
        s.status === notification.status &&
        !!s.date &&
        !!notification.date &&
        isEqual(s.date, notification.date)
      ) {
        return { ...s, status: NotificationStatus.Old };
      } else {
        return s;
      }
    }),
  })),

  on(manyNotificationSeen, (state, { notifications }) => ({
    ...state,
    data: state.data.map((s) => {
      if (includes(notifications, s)) {
        return { ...s, status: NotificationStatus.Old };
      } else {
        return s;
      }
    }),
  }))
);
