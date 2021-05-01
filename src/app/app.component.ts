import { Component, OnInit } from '@angular/core';
import * as fromRoot from '@app/user/ngrx/reducers';
import { Store } from '@ngrx/store';
import { logIn } from './root/ngrx/actions/authentication.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'yova-frontend';
  constructor(private readonly store: Store<fromRoot.State>) {}

  ngOnInit(): void {
    // TODO: implement authentication in authentication module
    this.store.dispatch(logIn({ username: 'John001', password: '123456' }));
  }
}
