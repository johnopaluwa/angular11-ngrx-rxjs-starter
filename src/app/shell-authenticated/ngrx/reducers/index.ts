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

export interface ShellAuthenticatedState {
  notifications: fromNotification.State;
}

export interface State extends fromRoot.State {
  shellauthenticated: ShellAuthenticatedState;
}

export const USER_REDUCERS = new InjectionToken<
  ActionReducerMap<ShellAuthenticatedState, Action>
>('Shell authenticated reducers token', {
  factory: () => ({
    notifications: fromNotification.reducer,
  }),
});

export const storage = {
  shellauthenticated: {
    deserialize: (json: any): State =>
      defaultsDeep(json, fromNotification.initialState),
    serialize: (state: State) => state,
  },
};

export const getUSerState = createFeatureSelector<ShellAuthenticatedState>(
  'shellauthenticated'
);
export const getNotifications = createSelector(
  getUSerState,
  (state) => state.notifications.data
);
