import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
@Injectable()
export class UserDetailHttpApi {
  constructor() {}
  setUserName(_userName: string): Observable<boolean> {
    return of(true);
  }
}
