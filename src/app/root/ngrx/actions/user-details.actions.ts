import { createAction, props } from '@ngrx/store';

export const setUserName = createAction(
  '[UserDetails] set user name',
  props<{ username: string }>()
);

export const userNameSet = createAction(
  '[UserDetails] user name set',
  props<{ username: string }>()
);
