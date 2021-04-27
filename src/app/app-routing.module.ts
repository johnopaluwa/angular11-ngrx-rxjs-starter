import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuleUrls } from './root/enums/global-url';
import { NotificationComponent } from './user/notification/notification.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: `${ModuleUrls.User}` },
  {
    path: `${ModuleUrls.User}`,
    pathMatch: 'prefix',
    component: NotificationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
