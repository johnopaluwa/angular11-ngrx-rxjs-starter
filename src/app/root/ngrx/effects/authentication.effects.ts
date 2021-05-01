import { Injectable } from '@angular/core';
import { AuthenticationHttpApi } from '@app/root/api/authentication-http.api';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, mergeMap, switchMap } from 'rxjs/operators';
import { loggedIn, logIn, logOut } from '../actions/authentication.actions';
import { errorAction } from '../actions/core.actions';

@Injectable()
export class AuthenticationEffects {
  login = createEffect(() =>
    this.actions$.pipe(
      ofType(logIn),
      switchMap((action) =>
        this.authApi.login(action.username, action.password).pipe(
          mergeMap((res) => [
            loggedIn({
              accountId: res.accountId,
              expireAt: res.expireAt,
              token: res.token,
            }),
          ]),
          catchError((error: Error) => {
            const res = [];
            res.push(errorAction({ action: action.type, error: error }));
            res.push(loggedOut());
            return res;
          })
        )
      )
    )
  );

  logOut = createEffect(() =>
    this.actions$.pipe(
      ofType(logOut),
      switchMap((action) =>
        this.authApi.logOut().pipe(
          mergeMap((_res) => [loggedOut()]),
          catchError((error: Error) => {
            const res = [];
            res.push(errorAction({ action: action.type, error: error }));
            res.push(loggedOut());
            return res;
          })
        )
      )
    )
  );

  constructor(
    private readonly actions$: Actions,
    private readonly authApi: AuthenticationHttpApi
  ) {}
}
function loggedOut(): any {
  throw new Error('Function not implemented.');
}
