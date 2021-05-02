import { Component, OnInit } from '@angular/core';
import * as fromShellAuthenticated from '@app/shell-authenticated/ngrx/reducers';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core/';
import { setUserName } from './root/ngrx/actions/user-details.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'yova-frontend';
  constructor(
    private readonly store: Store<fromShellAuthenticated.State>,
    private readonly translateService: TranslateService
  ) {}

  ngOnInit(): void {
    this.translateService.setDefaultLang('de');
    // TODO: remove and use in component for creating a user
    this.store.dispatch(setUserName({ username: 'John' }));
  }
}
