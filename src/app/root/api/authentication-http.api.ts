import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LoginResult } from '../models/login-result';

@Injectable()
export class AuthenticationHttpApi {
  constructor() {}

  login(_mail: string, _password: string): Observable<LoginResult> {
    const loginResult = new LoginResult(
      'token',
      new Date('July 17, 2021 03:24:00'),
      'accountId'
    );
    return of(loginResult);
  }

  logOut(): Observable<boolean> {
    return of(true);
  }
}
