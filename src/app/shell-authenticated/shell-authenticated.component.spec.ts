import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '@app/modules-re-use/header/header.component';
import { provideMockStore } from '@ngrx/store/testing';
import { MockComponents } from 'ng-mocks';
import { ShellAuthenticatedComponent } from './shell-authenticated.component';

describe('ShellAuthenticatedComponent', () => {
  let component: ShellAuthenticatedComponent;
  let fixture: ComponentFixture<ShellAuthenticatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ShellAuthenticatedComponent,
        MockComponents(HeaderComponent),
      ],
      imports: [RouterModule.forRoot([], { relativeLinkResolution: 'legacy' })],
      providers: [provideMockStore()],
    }).compileComponents();
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
