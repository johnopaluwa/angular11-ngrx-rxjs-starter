import { Location } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatAccordion } from '@angular/material/expansion';
import { UniversalTransformPipe } from '@app/modules-re-use/common-pipes/universal-transform.pipe';
import * as fromRoot from '@app/root/ngrx/reducers';
import { getComponent } from '@app/root/test/data-test-finder';
import { testEmptyNotification } from '@app/root/test/test-data';
import { NotificationStatus } from '@app/shell-authenticated/models/notification-status';
import {
  deleteNotification,
  manyNotificationSeen,
} from '@app/shell-authenticated/ngrx/actions/notification.actions';
import * as fromShellAuthenticated from '@app/shell-authenticated/ngrx/reducers';
import { union } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { TranslateModule } from '@ngx-translate/core';
import { NotificationItemComponent } from '@user/components/notification-item/notification-item.component';
import { MockComponents, MockPipes } from 'ng-mocks';
import { NotificationComponent } from './notification.component';

describe('NotificationComponent', () => {
  let component: NotificationComponent;
  let fixture: ComponentFixture<NotificationComponent>;

  let location: Location;
  let store: MockStore;
  const nioNotification = {
    ...testEmptyNotification,
    title: 'nio-removed',
    active: true,
    status: NotificationStatus.New,
  };
  const teslaNotification = {
    ...testEmptyNotification,
    title: 'tesla-removed',
    active: true,
  };

  const xpengNotification = {
    ...testEmptyNotification,
    title: 'xpeng-removed',
    active: true,
  };

  beforeEach(async () => {
    location = jasmine.createSpyObj('Location', ['getState']);

    await TestBed.configureTestingModule({
      declarations: [
        NotificationComponent,
        MockComponents(MatAccordion, NotificationItemComponent),
        MockPipes(UniversalTransformPipe),
      ],
      imports: [TranslateModule.forRoot()],
      providers: [
        provideMockStore(),
        { provide: Location, useValue: location },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    (location.getState as jasmine.Spy).and.returnValue({
      data: xpengNotification,
    });

    store = TestBed.inject(MockStore);
    store.overrideSelector(fromShellAuthenticated.getNotifications, [
      nioNotification,
      teslaNotification,
      xpengNotification,
    ]);
    store.overrideSelector(fromRoot.getUsername, 'John');

    fixture = TestBed.createComponent(NotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show all items', () => {
    expect(
      getComponent<NotificationItemComponent>(
        fixture,
        'data__noti-item-nio-removed'
      ).notification.title
    ).toBe('nio-removed');

    expect(
      getComponent<NotificationItemComponent>(
        fixture,
        'data__noti-item-tesla-removed'
      ).notification.title
    ).toBe('tesla-removed');
  });

  it('should dispatch delete action', () => {
    const dispatchSpy = spyOn(store, 'dispatch');

    getComponent<NotificationItemComponent>(
      fixture,
      'data__noti-item-tesla-removed'
    ).deleteNotification.emit(teslaNotification);
    fixture.detectChanges();

    const actionType = union({ deleteNotification });

    const action = dispatchSpy.calls.allArgs()[0][0] as typeof actionType;
    console.log(action);

    expect(action.notification).toEqual(teslaNotification);
  });

  it('should dispatch many locations seen on component destroy', () => {
    const dispatchSpy = spyOn(store, 'dispatch');
    getComponent<NotificationItemComponent>(
      fixture,
      'data__noti-item-nio-removed'
    ).expansionOpened.emit();
    fixture.detectChanges();

    component.ngOnDestroy();

    const actionType = union({ manyNotificationSeen });

    const action = dispatchSpy.calls.allArgs()[0][0] as typeof actionType;
    console.log(action);

    expect(action.notifications).toEqual([xpengNotification, nioNotification]);
  });
});
