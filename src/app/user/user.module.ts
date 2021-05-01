import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { USerHttpApi } from './api/user-http.api';
import { NotificationEffects } from './ngrx/effects/notification.effects';
import { USER_REDUCERS } from './ngrx/reducers';
import { NotificationComponent } from './notification/notification.component';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [NotificationComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    StoreModule.forFeature('user', USER_REDUCERS),
    EffectsModule.forFeature([NotificationEffects]),
  ],
  providers: [USerHttpApi],
})
export class UserModule {}
