import { createReducer, on } from '@ngrx/store';
import { orderBy } from 'lodash';
import { NotificationData } from '../../models/notification';
import {
  notificationDeleted,
  notificationLoaded,
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
  on(notificationDeleted, (state, { notificationId }) => ({
    ...state,
    data: orderBy(
      state.data.filter((s) => s.id !== notificationId),
      (s) => s.date,
      'desc'
    ),
  }))
);
