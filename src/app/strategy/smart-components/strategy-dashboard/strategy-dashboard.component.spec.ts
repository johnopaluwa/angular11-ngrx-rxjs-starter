import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrategyDashboardComponent } from './strategy-dashboard.component';

describe('StrategyDashboardComponent', () => {
  let component: StrategyDashboardComponent;
  let fixture: ComponentFixture<StrategyDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StrategyDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StrategyDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
