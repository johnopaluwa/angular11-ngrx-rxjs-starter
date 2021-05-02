export enum NotificationStatus {
  Old = 'old',
  New = 'new',
}

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace NotificationStatus {
  const lookup = [
    { type: NotificationStatus.Old, json: 'old' },
    { type: NotificationStatus.New, json: 'new' },
  ];

  export function fromJson(json: string): NotificationStatus | null {
    return lookup.find((s) => s.json === json?.toString())?.type ?? null;
  }
}
