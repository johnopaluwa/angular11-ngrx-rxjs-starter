import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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

  @Input() public set username(val: string | null) {
    this.username$.next(val);
  }

  @Output()
  public readonly deleteNotification = new EventEmitter<NotificationData>();

  public readonly notification$ = new ReplaySubject<NotificationData>(1);
  public readonly username$ = new ReplaySubject<string | null>(1);
  public notificationStatus = NotificationStatus;
  constructor() {}

  ngOnInit(): void {}
}
