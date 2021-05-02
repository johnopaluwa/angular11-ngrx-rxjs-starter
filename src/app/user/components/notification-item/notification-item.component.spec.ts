import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButton } from '@angular/material/button';
import {
  MatExpansionPanel,
  MatExpansionPanelHeader,
  MatExpansionPanelTitle,
} from '@angular/material/expansion';
import { MatIcon } from '@angular/material/icon';
import { getElement } from '@app/root/test/data-test-finder';
import { testEmptyNotification } from '@app/root/test/test-data';
import { NotificationStatus } from '@app/shell-authenticated/models/notification-status';
import { TranslateModule } from '@ngx-translate/core';
import { MockComponents } from 'ng-mocks/dist/lib/mock-component/mock-component';
import { NotificationItemComponent } from './notification-item.component';

describe('NotificationItemComponent', () => {
  let component: NotificationItemComponent;
  let fixture: ComponentFixture<NotificationItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        NotificationItemComponent,
        MockComponents(
          MatExpansionPanel,
          MatExpansionPanelHeader,
          MatExpansionPanelTitle,
          MatIcon,
          MatButton
        ),
      ],
      imports: [TranslateModule.forRoot()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show given data', () => {
    component.notification = {
      ...testEmptyNotification,
      title: 'Nio is removed from your portfolio',
      active: true,
      date: new Date(1995, 11, 17, 3, 24, 0),
      desc:
        '<p>We removed this company from your portfolio. Lorem ipsum dolor sit amet. </p>',
      status: NotificationStatus.New,
    };
    component.username = 'John';
    component.expand = false;
    fixture.detectChanges();

    expect(
      getElement<HTMLElement>(fixture, 'data__date').innerHTML.trim()
    ).toBe(`17.12.1995`);
    expect(
      getElement<HTMLElement>(fixture, 'data__title').innerHTML.trim()
    ).toBe(`Nio is removed from your portfolio`);
    expect(
      getElement<HTMLElement>(fixture, 'data__name').innerHTML.trim()
    ).toBe(`YOVA.USER.NOTIFICATION.HELLO`);
    expect(
      getElement<HTMLElement>(fixture, 'data__content').innerHTML.trim()
    ).toBe(
      `<p>We removed this company from your portfolio. Lorem ipsum dolor sit amet. </p>`
    );
  });
});
