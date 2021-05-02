import { Component, OnInit } from '@angular/core';
import { ReportProgress } from '@app/root/helpers/report-progress';
import * as fromRoot from '@app/root/ngrx/reducers';
import { NotificationData } from '@app/shell-authenticated/models/notification';
import {
  deleteNotification,
  loadNotification,
} from '@app/shell-authenticated/ngrx/actions/notification.actions';
import * as fromShellAuthenticated from '@app/shell-authenticated/ngrx/reducers';
import { select, Store } from '@ngrx/store';
import { map } from 'rxjs/operators';

@Component({
  selector: 'yova-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent implements OnInit {
  public readonly loadReportProgress = new ReportProgress();
  public readonly deleteReportProgress = new ReportProgress();
  public notifications$ = this.store.pipe(
    select(fromShellAuthenticated.getNotifications)
  );
  public userName$ = this.store.pipe(
    select(fromRoot.getUsername),
    map((s) => s ?? null)
  );
  constructor(private readonly store: Store<fromShellAuthenticated.State>) {}

  ngOnInit(): void {
    this.store.dispatch(
      loadNotification({ reportProgress: this.loadReportProgress })
    );
  }

  deleteNotification(notification: NotificationData) {
    this.store.dispatch(
      deleteNotification({
        notification: notification,
        reportProgress: this.deleteReportProgress,
      })
    );
  }
}
