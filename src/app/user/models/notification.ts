export class NotificationData {
  constructor(
    public readonly id: string,
    public readonly date: Date,
    public readonly title: string,
    public readonly desc: string,
    public readonly active: boolean,
    public readonly status: string
  ) {}

  public static parse(json: any): NotificationData {
    return new NotificationData(
      json.id,
      json.date,
      json.title,
      json.desc,
      json.active,
      json.status
    );
  }
}
