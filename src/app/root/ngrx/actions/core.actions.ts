import { createAction, props } from '@ngrx/store';

export const errorAction = createAction(
  '[Root] error',
  props<{ action: string; error: Error }>()
);
export const successAction = createAction(
  '[Root] success',
  props<{ action: string }>()
);
