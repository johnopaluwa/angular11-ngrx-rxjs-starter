import { Component, OnInit } from '@angular/core';
import { ReportProgress } from '@app/root/helpers/report-progress';
import { loadNotification } from '@app/shell-authenticated/ngrx/actions/notification.actions';
import * as fromShellAuthenticated from '@app/shell-authenticated/ngrx/reducers';
import { Store } from '@ngrx/store';

@Component({
  selector: 'yova-shell-authenticated',
  templateUrl: './shell-authenticated.component.html',
  styleUrls: ['./shell-authenticated.component.scss'],
})
export class ShellAuthenticatedComponent implements OnInit {
  public readonly loadReportProgress = new ReportProgress();

  constructor(private readonly store: Store<fromShellAuthenticated.State>) {}

  ngOnInit(): void {
    this.store.dispatch(
      loadNotification({ reportProgress: this.loadReportProgress })
    );
  }
}
