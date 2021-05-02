import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuleUrls } from './root/enums/global-url';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: `${ModuleUrls.ShellAuthenticated}`,
  },
  {
    path: `${ModuleUrls.ShellAuthenticated}`,
    pathMatch: 'prefix',
    loadChildren: () =>
      import('app/shell-authenticated/shell-authenticated.module').then(
        (m) => m.ShellAuthenticatedModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
