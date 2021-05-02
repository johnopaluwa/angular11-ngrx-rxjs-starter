import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModuleUrls, UserUrls } from '@app/root/enums/global-url';
import { NotificationData } from '@app/shell-authenticated/models/notification';
import { NotificationStatus } from '@app/shell-authenticated/models/notification-status';
import { notificationSeen } from '@app/shell-authenticated/ngrx/actions/notification.actions';
import * as fromShellAuthenticated from '@app/shell-authenticated/ngrx/reducers';
import { select, Store } from '@ngrx/store';
import { orderBy } from 'lodash';
import { map } from 'rxjs/operators';

@Component({
  selector: 'yova-strategy-dashboard',
  templateUrl: './strategy-dashboard.component.html',
  styleUrls: ['./strategy-dashboard.component.scss'],
})
export class StrategyDashboardComponent implements OnInit {
  public latestNewNotifications$ = this.store.pipe(
    select(fromShellAuthenticated.getNotifications),
    map((s) =>
      orderBy(
        s.filter(
          (notification) => notification.status === NotificationStatus.New
        ),
        (m) => m.date,
        'desc'
      )
    )
  );
  constructor(
    private readonly store: Store<fromShellAuthenticated.State>,
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router
  ) {}

  ngOnInit(): void {}

  public gotoNotifications(latestNewNotifications: NotificationData) {
    this.router.navigate(
      [ModuleUrls.ShellAuthenticated, ModuleUrls.User, UserUrls.Notification],
      {
        relativeTo: this.activatedRoute.root,
        state: { data: latestNewNotifications },
      }
    );
  }

  public closePreview(notification: NotificationData) {
    this.store.dispatch(notificationSeen({ notification: notification }));
  }
}
