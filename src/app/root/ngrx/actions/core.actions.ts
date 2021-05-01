import { createAction, props } from '@ngrx/store';

export const reset = createAction(
  '[Root] reset',
  props<{ redirectToRoot: boolean }>()
);
export const errorAction = createAction(
  '[Root] error',
  props<{ action: string; error: Error }>()
);
export const successAction = createAction(
  '[Root] success',
  props<{ action: string }>()
);
