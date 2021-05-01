import { InjectionToken } from '@angular/core';
import {
  Action,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import { defaultsDeep } from 'lodash';
import * as fromNotification from './notification.reducers';

export interface State {
  notification: fromNotification.State;
}

export const defaultState: State = {
  notification: fromNotification.initialState,
};

export const USER_REDUCERS = new InjectionToken<
  ActionReducerMap<State, Action>
>('Users reducers token', {
  factory: () => ({
    notification: fromNotification.reducer,
  }),
});

export const storage = {
  user: {
    deserialize: (json: any): State => defaultsDeep(json, defaultState),
    serialize: (state: State) => state,
  },
};

export const getUSerState = createFeatureSelector<State>('user');
export const getNotifications = createSelector(
  getUSerState,
  (state) => state.notification
);
