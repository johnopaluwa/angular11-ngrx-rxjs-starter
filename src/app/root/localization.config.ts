import { Injectable } from '@angular/core';
import { L10nConfig } from 'angular-l10n';

@Injectable()
export class LocalizationConfig {
  public static readonly config: L10nConfig = {
    format: 'language',
    providers: [{ name: 'company', asset: 'assets/translations/locale' }],
    cache: true,
    keySeparator: '.',
    defaultLocale: {
      language: 'de',
      currency: 'EUR',
      timeZone: 'Europe/Berlin',
    },
    schema: [
      {
        locale: { language: 'de', currency: 'EUR', timeZone: 'Europe/Berlin' },
        dir: 'ltr',
        text: 'Germany',
      },
    ],
  };
}
