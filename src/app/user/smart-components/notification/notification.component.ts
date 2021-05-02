import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReportProgress } from '@app/root/helpers/report-progress';
import * as fromRoot from '@app/root/ngrx/reducers';
import { NotificationData } from '@app/shell-authenticated/models/notification';
import { deleteNotification } from '@app/shell-authenticated/ngrx/actions/notification.actions';
import * as fromShellAuthenticated from '@app/shell-authenticated/ngrx/reducers';
import { select, Store } from '@ngrx/store';
import { isEqual } from 'date-fns';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'yova-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent implements OnInit {
  public readonly deleteReportProgress = new ReportProgress();
  public chosenNotification$ = new BehaviorSubject<NotificationData | null>(
    null
  );
  public notifications$ = this.store.pipe(
    select(fromShellAuthenticated.getNotifications)
  );
  public userName$ = this.store.pipe(
    select(fromRoot.getUsername),
    map((s) => s ?? null)
  );
  constructor(
    private readonly store: Store<fromShellAuthenticated.State>,
    private location: Location
  ) {}

  ngOnInit(): void {
    const routerSentState = this.location.getState() as any;
    const notificationDataSent = routerSentState.data as NotificationData;
    if (!!notificationDataSent)
      this.chosenNotification$.next(notificationDataSent);
  }

  deleteNotification(notification: NotificationData) {
    this.store.dispatch(
      deleteNotification({
        notification: notification,
        reportProgress: this.deleteReportProgress,
      })
    );
  }

  expandNotification(current: NotificationData, chosen: NotificationData) {
    if (!chosen) {
      return false;
    }

    return (
      chosen.active === current.active &&
      chosen.title === current.title &&
      chosen.desc === current.desc &&
      chosen.status === current.status &&
      !!chosen.date &&
      !!current.date &&
      isEqual(chosen.date, current.date)
    );
  }
}
