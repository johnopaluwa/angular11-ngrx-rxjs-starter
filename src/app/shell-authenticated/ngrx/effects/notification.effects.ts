import { Injectable } from '@angular/core';
import {
  errorAction,
  successAction,
} from '@app/root/ngrx/actions/core.actions';
import { NotificationHttpApi } from '@app/shell-authenticated/api/notification-http.api';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, mergeMap, switchMap } from 'rxjs/operators';
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
      switchMap((action) => {
        action.reportProgress.inProgress();
        return this.api.getNotificatioData().pipe(
          mergeMap((s) => {
            action.reportProgress.done();
            return [
              notificationLoaded({ notifications: s }),
              successAction({
                action: action.type,
              }),
            ];
          }),
          catchError((error: Error) => {
            action.reportProgress.failed();
            return of(errorAction({ action: action.type, error: error }));
          })
        );
      })
    )
  );

  deleteNotification = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteNotification),
      switchMap((action) => {
        action.reportProgress.inProgress();
        return this.api.deleteNotificatioData(action.notification).pipe(
          mergeMap((_) => {
            action.reportProgress.done();
            return [
              notificationDeleted({ notification: action.notification }),
              successAction({
                action: action.type,
              }),
            ];
          }),
          catchError((error: Error) => {
            action.reportProgress.failed();
            return of(errorAction({ action: action.type, error: error }));
          })
        );
      })
    )
  );

  constructor(
    private readonly actions$: Actions,
    private readonly api: NotificationHttpApi
  ) {}
}
