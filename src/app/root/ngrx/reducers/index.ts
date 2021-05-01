import { InjectionToken } from '@angular/core';
import {
  Action,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import * as fromAuthentication from './authentication.reducers';

export interface State {
  auth: fromAuthentication.State;
}

export const ROOT_REDUCERS = new InjectionToken<
  ActionReducerMap<State, Action>
>('Root reducers token', {
  factory: () => ({
    auth: fromAuthentication.reducer,
  }),
});

export const getAuth = createFeatureSelector<State, fromAuthentication.State>(
  'auth'
);

export const getLoggedInAccount = createSelector(
  getAuth,
  (state) => state.loggedInAccount
);
