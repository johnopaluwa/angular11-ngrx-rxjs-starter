import { Component, OnInit } from '@angular/core';
import { ReportProgress } from '@app/root/helpers/report-progress';
import { Store } from '@ngrx/store';
import { loadNotification } from '@user/ngrx/actions/notification.actions';
import * as fromUser from '@user/ngrx/reducers';

@Component({
  selector: 'yova-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent implements OnInit {
  public readonly loadReportProgress = new ReportProgress();
  constructor(private readonly store: Store<fromUser.State>) {}

  ngOnInit(): void {
    this.store.dispatch(
      loadNotification({ reportProgress: this.loadReportProgress })
    );
  }
}
