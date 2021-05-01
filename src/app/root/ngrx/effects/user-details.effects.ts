import { Injectable } from '@angular/core';
import { UserDetailHttpApi } from '@app/root/api/user-detail-http.api';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, mergeMap, switchMap } from 'rxjs/operators';
import { errorAction } from '../actions/core.actions';
import { setUserName, userNameSet } from '../actions/user-details.actions';

@Injectable()
export class UserDetailsEffects {
  setUserName = createEffect(() =>
    this.actions$.pipe(
      ofType(setUserName),
      switchMap((action) =>
        this.api.setUserName(action.username).pipe(
          mergeMap((res) => [
            userNameSet({
              username: action.username,
            }),
          ]),
          catchError((error: Error) => {
            const res = [];
            res.push(errorAction({ action: action.type, error: error }));
            return res;
          })
        )
      )
    )
  );

  constructor(
    private readonly actions$: Actions,
    private readonly api: UserDetailHttpApi
  ) {}
}
