import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StrategyUrls } from '@app/root/enums/global-url';
import { StrategyDashboardComponent } from './smart-components/strategy-dashboard/strategy-dashboard.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: `${StrategyUrls.Dashboard}` },
  {
    path: `${StrategyUrls.Dashboard}`,
    pathMatch: 'prefix',
    component: StrategyDashboardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StrategyRoutingModule {}
