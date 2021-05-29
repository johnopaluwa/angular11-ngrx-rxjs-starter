import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ReportProgress } from '@app/root/helpers/report-progress';
import * as fromRoot from '@app/root/ngrx/reducers';
import { NotificationData } from '@app/shell-authenticated/models/notification';
import { NotificationStatus } from '@app/shell-authenticated/models/notification-status';
import {
  deleteNotification,
  manyNotificationSeen,
} from '@app/shell-authenticated/ngrx/actions/notification.actions';
import * as fromShellAuthenticated from '@app/shell-authenticated/ngrx/reducers';
import { select, Store } from '@ngrx/store';
import { isEqual } from 'lodash';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'yolo-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent implements OnInit, OnDestroy {
  public readonly deleteReportProgress = new ReportProgress();
  public readonly newOpenedExpansion: NotificationData[] = [];
  public notificationToExpand$ = new BehaviorSubject<NotificationData | null>(
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
    if (!!notificationDataSent) {
      this.newOpenedExpansion.push(notificationDataSent);
      this.notificationToExpand$.next(notificationDataSent);
    }
  }

  public deleteNotification(notification: NotificationData) {
    this.store.dispatch(
      deleteNotification({
        notification: notification,
        reportProgress: this.deleteReportProgress,
      })
    );
  }

  public sameNotification(current: NotificationData, chosen: NotificationData) {
    if (!chosen || !current) {
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

  public expansionOpened(notification: NotificationData) {
    if (notification.status === NotificationStatus.Old) {
      return;
    }
    if (!this.newOpenedExpansion.find((s) => isEqual(s, notification))) {
      this.newOpenedExpansion.push(notification);
    }
  }

  public trackByObj(_index: number, item: NotificationData) {
    return item;
  }

  ngOnDestroy(): void {
    if (this.newOpenedExpansion.length > 0) {
      this.store.dispatch(
        manyNotificationSeen({ notifications: this.newOpenedExpansion })
      );
    }
  }
}
