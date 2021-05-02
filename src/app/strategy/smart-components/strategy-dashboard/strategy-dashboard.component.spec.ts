import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { InformationPreviewComponent } from '@app/modules-re-use/information-preview/information-preview.component';
import { ModuleUrls, UserUrls } from '@app/root/enums/global-url';
import { getComponent, getDebugElement } from '@app/root/test/data-test-finder';
import { testEmptyNotification } from '@app/root/test/test-data';
import { NotificationStatus } from '@app/shell-authenticated/models/notification-status';
import * as fromShellAuthenticated from '@app/shell-authenticated/ngrx/reducers';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { MockComponents } from 'ng-mocks';
import { StrategyDashboardComponent } from './strategy-dashboard.component';

describe('StrategyDashboardComponent', () => {
  let component: StrategyDashboardComponent;
  let fixture: ComponentFixture<StrategyDashboardComponent>;
  let router: Router;
  let store: MockStore<fromShellAuthenticated.State>;

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
    status: NotificationStatus.New,
  };

  const xpengNotification = {
    ...testEmptyNotification,
    title: 'xpeng-removed',
    active: true,
  };

  beforeEach(async () => {
    router = jasmine.createSpyObj('Router', ['navigate']);
    await TestBed.configureTestingModule({
      declarations: [
        StrategyDashboardComponent,
        MockComponents(InformationPreviewComponent),
      ],
      providers: [
        provideMockStore(),
        {
          provide: ActivatedRoute,
          useValue: {
            root: null,
          },
        },
        { provide: Router, useValue: router },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    store = TestBed.inject(MockStore);
    store.overrideSelector(fromShellAuthenticated.getNotifications, [
      nioNotification,
      teslaNotification,
      xpengNotification,
    ]);

    fixture = TestBed.createComponent(StrategyDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show all notification previews', () => {
    expect(
      getComponent<InformationPreviewComponent>(
        fixture,
        'data__noti-item-nio-removed'
      ).infoText
    ).toBe('nio-removed');

    expect(
      getComponent<InformationPreviewComponent>(
        fixture,
        'data__noti-item-tesla-removed'
      ).infoText
    ).toBe('tesla-removed');

    expect(
      getDebugElement(fixture, 'data__noti-item-xpeng-removed')
    ).toBeFalsy();
  });

  it('should go to notification route', () => {
    getComponent<InformationPreviewComponent>(
      fixture,
      'data__noti-item-tesla-removed'
    ).actionClicked.emit();
    expect(router.navigate).toHaveBeenCalledOnceWith(
      [ModuleUrls.ShellAuthenticated, ModuleUrls.User, UserUrls.Notification],
      {
        relativeTo: null,
        state: { data: teslaNotification },
      }
    );
  });
});
