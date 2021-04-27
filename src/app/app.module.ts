import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  L10nIntlModule,
  L10nLoader,
  L10nTranslationModule,
} from 'angular-l10n';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocalizationConfig } from './root/localization.config';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    L10nTranslationModule.forRoot(LocalizationConfig.config),
    L10nIntlModule,
    AppRoutingModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initLocalization,
      deps: [L10nLoader],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

export function initLocalization(l10nLoader: L10nLoader): () => Promise<void> {
  return () => l10nLoader.init();
}
