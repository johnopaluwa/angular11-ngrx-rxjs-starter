import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NotificationComponent } from './notification/notification.component';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [NotificationComponent],
  imports: [CommonModule, UserRoutingModule],
})
export class UserModule {}
