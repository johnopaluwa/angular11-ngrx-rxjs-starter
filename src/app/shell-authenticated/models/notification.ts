import { ParseLogger } from '@app/root/helpers/parse-logger';
import { NotificationStatus } from './notification-status';

export class NotificationData {
  constructor(
    public readonly date: Date | null,
    public readonly title: string,
    public readonly desc: string,
    public readonly active: boolean,
    public readonly status: NotificationStatus | null
  ) {}

  public static parse(json: any): NotificationData {
    return new NotificationData(
      ParseLogger.safeParseDate(json.date),
      json.title,
      json.desc,
      json.active,
      ParseLogger.parseJson(NotificationStatus.fromJson, json.status)
    );
  }
}
