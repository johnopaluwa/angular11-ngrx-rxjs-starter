import { InjectionToken } from '@angular/core';
import {
  Action,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import * as fromRoot from './root.reducers';

export interface State {
  root: fromRoot.State;
}

export const ROOT_REDUCERS = new InjectionToken<
  ActionReducerMap<State, Action>
>('Root reducers token', {
  factory: () => ({
    root: fromRoot.reducer,
  }),
});

export const getRoot = createFeatureSelector<State, fromRoot.State>('root');

export const getCompanyName = createSelector(
  getRoot,
  (state) => state.companyName
);
