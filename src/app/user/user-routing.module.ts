import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserUrls } from '../root/enums/global-url';
import { NotificationComponent } from './smart-components/notification/notification.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: `${UserUrls.Notification}` },
  {
    path: `${UserUrls.Notification}`,
    pathMatch: 'prefix',
    component: NotificationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
