import { InjectionToken } from '@angular/core';
import * as fromRoot from '@app/root/ngrx/reducers';
import {
  Action,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import { defaultsDeep } from 'lodash';
import * as fromNotification from './notification.reducers';

export interface UserState {
  notifications: fromNotification.State;
}

export interface State extends fromRoot.State {
  user: UserState;
}

export const USER_REDUCERS = new InjectionToken<
  ActionReducerMap<UserState, Action>
>('Users reducers token', {
  factory: () => ({
    notifications: fromNotification.reducer,
  }),
});

export const storage = {
  user: {
    deserialize: (json: any): State =>
      defaultsDeep(json, fromNotification.initialState),
    serialize: (state: State) => state,
  },
};

export const getUSerState = createFeatureSelector<UserState>('user');
export const getNotifications = createSelector(
  getUSerState,
  (state) => state.notifications.data
);
