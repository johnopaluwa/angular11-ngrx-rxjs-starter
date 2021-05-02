import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { CommonPipesModule } from '@app/modules-re-use/common-pipes/common-pipes.module';
import { TranslateModule } from '@ngx-translate/core';
import { NotificationItemComponent } from './components/notification-item/notification-item.component';
import { NotificationComponent } from './smart-components/notification/notification.component';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [NotificationComponent, NotificationItemComponent],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatButtonModule,
    MatIconModule,
    CommonPipesModule,
    TranslateModule.forChild({
      extend: true,
    }),
    UserRoutingModule,
  ],
  providers: [],
})
export class UserModule {}
