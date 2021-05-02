import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuleUrls } from './root/enums/global-url';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: `${ModuleUrls.Strategy}` },
  {
    path: `${ModuleUrls.Strategy}`,
    pathMatch: 'prefix',
    loadChildren: () =>
      import('app/strategy/strategy.module').then((m) => m.StrategyModule),
  },
  {
    path: `${ModuleUrls.User}`,
    pathMatch: 'prefix',
    loadChildren: () =>
      import('app/user/user.module').then((m) => m.UserModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
