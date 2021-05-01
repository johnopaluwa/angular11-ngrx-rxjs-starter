import { Component, Input, OnInit } from '@angular/core';
import { NotificationData } from '@user/models/notification';
import { NotificationStatus } from '@user/models/notification-status';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'yova-notification-item',
  templateUrl: './notification-item.component.html',
  styleUrls: ['./notification-item.component.scss'],
})
export class NotificationItemComponent implements OnInit {
  @Input() public set notification(val: NotificationData) {
    this.notification$.next(val);
  }

  @Input() public set username(val: string) {
    this.username$.next(val);
  }

  public readonly notification$ = new ReplaySubject<NotificationData>(1);
  public readonly username$ = new ReplaySubject<string>(1);
  public notificationStatus = NotificationStatus;
  constructor() {}

  ngOnInit(): void {}
}
