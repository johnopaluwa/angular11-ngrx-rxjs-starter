export class LoginResult {
  constructor(
    public readonly token: string,
    public readonly expireAt: Date,
    public readonly accountId: string
  ) {}
}
