import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { ParseLogger } from 'src/app/root/helpers/parse-logger';
import { NotificationData } from '../models/notification';

export class USerHttpApi {
  private _jsonURL = '../data/notifications.json';
  constructor(private http: HttpClient) {}

  public getNotificatioData(): Observable<NotificationData[]> {
    return this.http
      .get(this._jsonURL)
      .pipe(
        map((json: any) => ParseLogger.parseArray(NotificationData.parse, json))
      );
  }

  public deleteNotificatioData(_notificationId: string): Observable<boolean> {
    return of(true);
  }
}
