import { createReducer, on } from '@ngrx/store';
import { userNameSet } from '../actions/user-details.actions';

export interface UserDetailState {
  username: string;
}

export type State = UserDetailState;

export const initialState: State = {
  username: '',
};

export const reducer = createReducer(
  initialState,
  on(userNameSet, (state, { username }) => ({
    ...state,
    username: username,
  }))
);
