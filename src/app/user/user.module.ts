import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TranslateModule } from '@ngx-translate/core';
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
    MatExpansionModule,
    MatButtonModule,
    MatIconModule,
    TranslateModule.forChild({
      extend: true,
    }),
    StoreModule.forFeature('user', USER_REDUCERS),
    EffectsModule.forFeature([NotificationEffects]),
    UserRoutingModule,
  ],
  providers: [USerHttpApi],
})
export class UserModule {}
