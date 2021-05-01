import { InjectionToken } from '@angular/core';
import {
  Action,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import { defaultsDeep } from 'lodash';
import * as fromUserDetail from './user-detail.reducers';

export interface State {
  userdetail: fromUserDetail.State;
}

export const ROOT_REDUCERS = new InjectionToken<
  ActionReducerMap<State, Action>
>('Root reducers token', {
  factory: () => ({
    userdetail: fromUserDetail.reducer,
  }),
});

export const getAuth = createFeatureSelector<State, fromUserDetail.State>(
  'userdetail'
);

export const getUsername = createSelector(getAuth, (state) => state.username);

export const storage = {
  userdetail: {
    deserialize: (json: any): State =>
      defaultsDeep(json, fromUserDetail.initialState),
    serialize: (state: State) => state,
  },
};
