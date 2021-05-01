import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { ActionReducer, MetaReducer, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {
  L10nIntlModule,
  L10nLoader,
  L10nTranslationModule,
} from 'angular-l10n';
import { environment } from 'environments/environment';
import { localStorageSync } from 'ngrx-store-localstorage';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserDetailHttpApi } from './root/api/user-detail-http.api';
import { HeaderComponent } from './root/components/header/header.component';
import { LocalizationConfig } from './root/localization.config';
import { actionLogger } from './root/meta-reducers/action-logger';
import { UserDetailsEffects } from './root/ngrx/effects/user-details.effects';
import * as fromRoot from './root/ngrx/reducers';
import * as fromUser from './user/ngrx/reducers';

export function localStorageSyncReducer(
  reducer: ActionReducer<any>
): ActionReducer<any> {
  return localStorageSync({
    keys: [fromRoot.storage, fromUser.storage],
    rehydrate: true,
  })(reducer);
}
export const logger = environment.ngrxLogger ? [actionLogger] : [];

const metaReducers: Array<MetaReducer<any, any>> = [
  ...logger,
  localStorageSyncReducer,
];

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    L10nTranslationModule.forRoot(LocalizationConfig.config),
    L10nIntlModule,
    MatToolbarModule,
    HttpClientModule,
    StoreModule.forRoot(fromRoot.ROOT_REDUCERS, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: false,
        strictStateSerializability: false,
        strictActionSerializability: false,
        strictActionWithinNgZone: true,
        strictActionTypeUniqueness: true,
      },
    }),
    EffectsModule.forRoot([UserDetailsEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 50,
      logOnly: environment.production,
    }),
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initLocalization,
      deps: [L10nLoader],
      multi: true,
    },
    UserDetailHttpApi,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

export function initLocalization(l10nLoader: L10nLoader): () => Promise<void> {
  return () => l10nLoader.init();
}
