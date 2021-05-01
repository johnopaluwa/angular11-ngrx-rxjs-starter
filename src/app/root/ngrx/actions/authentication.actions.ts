import { createAction, props } from '@ngrx/store';

export const logIn = createAction(
  '[Authentication] log in',
  props<{ username: string; password: string }>()
);

export const loggedIn = createAction(
  '[Authentication] logged in',
  props<{ token: string; expireAt: Date; accountId: string }>()
);
export const logOut = createAction('[Authentication] logout');
export const logedOut = createAction('[Authentication] logedout');
