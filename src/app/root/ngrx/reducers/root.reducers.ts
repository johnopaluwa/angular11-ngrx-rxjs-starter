import { createReducer } from '@ngrx/store';
import { defaultsDeep } from 'lodash';

export interface RootState {
  companyName: string;
}

export type State = RootState;

export const initialState: State = {
  companyName: 'Yova',
};

export const reducer = createReducer(initialState);

export const storage = {
  root: {
    deserialize: (json: any): State => defaultsDeep(json, initialState),
    serialize: (state: State) => state,
  },
};
