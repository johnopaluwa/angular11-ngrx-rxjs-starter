import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { USerHttpApi } from './api/user-http.api';
import { NotificationItemComponent } from './components/notification-item/notification-item.component';
import { NotificationEffects } from './ngrx/effects/notification.effects';
import { USER_REDUCERS } from './ngrx/reducers';
import { NotificationComponent } from './smart-components/notification/notification.component';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [NotificationComponent, NotificationItemComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('user', USER_REDUCERS),
    EffectsModule.forFeature([NotificationEffects]),
    UserRoutingModule,
  ],
  providers: [USerHttpApi],
})
export class UserModule {}
