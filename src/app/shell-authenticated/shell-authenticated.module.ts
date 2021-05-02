import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderModule } from '@app/modules-re-use/header/header.module';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TranslateModule } from '@ngx-translate/core';
import { NotificationHttpApi } from './api/notification-http.api';
import { NotificationEffects } from './ngrx/effects/notification.effects';
import { USER_REDUCERS } from './ngrx/reducers';
import { ShellAuthenticatedRoutingModule } from './shell-authenticated-routing.module';
import { ShellAuthenticatedComponent } from './shell-authenticated.component';

@NgModule({
  declarations: [ShellAuthenticatedComponent],
  imports: [
    CommonModule,
    HeaderModule,
    TranslateModule.forChild({
      extend: true,
    }),
    StoreModule.forFeature('shellauthenticated', USER_REDUCERS),
    EffectsModule.forFeature([NotificationEffects]),
    ShellAuthenticatedRoutingModule,
  ],
  providers: [NotificationHttpApi],
})
export class ShellAuthenticatedModule {}
