import { createReducer, on } from '@ngrx/store';
import { sortBy } from 'lodash';
import { NotificationData } from '../../models/notification';
import {
  notificationDeleted,
  notificationLoaded,
} from '../actions/notification.actions';

export interface UserState {
  notifications: NotificationData[];
}

export type State = UserState;

export const initialState: State = {
  notifications: [],
};

export const reducer = createReducer(
  initialState,
  on(notificationLoaded, (state, { notifications }) => ({
    ...state,
    notifications: sortBy(notifications, (s) => s.date),
  })),
  on(notificationDeleted, (state, { notificationId }) => ({
    ...state,
    notifications: sortBy(
      state.notifications.filter((s) => s.id !== notificationId),
      (s) => s.date
    ),
  }))
);
