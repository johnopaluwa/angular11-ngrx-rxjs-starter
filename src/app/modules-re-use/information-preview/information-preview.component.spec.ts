import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationPreviewComponent } from './information-preview.component';

describe('InformationPreviewComponent', () => {
  let component: InformationPreviewComponent;
  let fixture: ComponentFixture<InformationPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformationPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
