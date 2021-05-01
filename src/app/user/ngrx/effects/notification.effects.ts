import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, mergeMap, switchMap } from 'rxjs/operators';
import {
  errorAction,
  successAction,
} from 'src/app/root/ngrx/actions/core.actions';
import { USerHttpApi } from '../../api/user-http.api';
import {
  deleteNotification,
  loadNotification,
  notificationDeleted,
  notificationLoaded,
} from '../actions/notification.actions';

@Injectable()
export class NotificationEffects {
  loadNotification = createEffect(() =>
    this.actions$.pipe(
      ofType(loadNotification),
      switchMap((action) =>
        this.api.getNotificatioData().pipe(
          mergeMap((s) => [
            notificationLoaded({ notifications: s }),
            successAction({
              action: action.type,
            }),
          ]),
          catchError((error: Error) =>
            of(errorAction({ action: action.type, error: error }))
          )
        )
      )
    )
  );

  deleteNotification = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteNotification),
      switchMap((action) =>
        this.api.deleteNotificatioData(action.notificationId).pipe(
          mergeMap((_) => [
            notificationDeleted({ notificationId: action.notificationId }),
            successAction({
              action: action.type,
            }),
          ]),
          catchError((error: Error) =>
            of(errorAction({ action: action.type, error: error }))
          )
        )
      )
    )
  );

  constructor(
    private readonly actions$: Actions,
    private readonly api: USerHttpApi
  ) {}
}
