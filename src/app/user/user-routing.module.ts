import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { UserUrls } from '../root/enums/global-url';
import { USER_REDUCERS } from './ngrx/reducers';
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
  imports: [
    StoreModule.forFeature('user', USER_REDUCERS),
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class UserRoutingModule {}
