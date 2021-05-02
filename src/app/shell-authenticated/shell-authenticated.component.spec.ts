import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellAuthenticatedComponent } from './shell-authenticated.component';

describe('ShellAuthenticatedComponent', () => {
  let component: ShellAuthenticatedComponent;
  let fixture: ComponentFixture<ShellAuthenticatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShellAuthenticatedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShellAuthenticatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
