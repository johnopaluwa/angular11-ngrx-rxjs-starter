import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ParseLogger } from '@app/root/helpers/parse-logger';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { NotificationData } from '../models/notification';

@Injectable()
export class USerHttpApi {
  private _jsonURL = 'assets/data/notifications.json';
  constructor(private http: HttpClient) {}

  public getNotificatioData(): Observable<NotificationData[]> {
    return this.http.get(this._jsonURL).pipe(
      map((json: any) => {
        return ParseLogger.parseArray(
          NotificationData.parse,
          json.notifications
        );
      })
    );
  }

  public deleteNotificatioData(_notificationId: string): Observable<boolean> {
    return of(true);
  }
}
