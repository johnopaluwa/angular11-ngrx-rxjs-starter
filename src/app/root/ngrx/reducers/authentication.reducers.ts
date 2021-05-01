import { createReducer, on } from '@ngrx/store';
import { defaultsDeep } from 'lodash';
import { logedOut, loggedIn } from '../actions/authentication.actions';

export interface AuthenticationState {
  token: string;
  loggedInAccount: string;
  expireAt: Date | null;
}

export type State = AuthenticationState;

export const initialState: State = {
  token: '',
  loggedInAccount: '',
  expireAt: null,
};

export const reducer = createReducer(
  initialState,
  on(loggedIn, (state, { token, expireAt, accountId }) => ({
    ...state,
    token: token,
    loggedInAccount: accountId,
    expireAt: expireAt,
  })),
  on(logedOut, (_state) => initialState)
);

export const storage = {
  auth: {
    deserialize: (json: any): State => defaultsDeep(json, initialState),
    serialize: (state: State) => state,
  },
};
