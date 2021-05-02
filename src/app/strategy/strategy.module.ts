import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InformationPreviewModule } from '@app/modules-re-use/information-preview/information-preview.module';
import { StrategyDashboardComponent } from './smart-components/strategy-dashboard/strategy-dashboard.component';
import { StrategyRoutingModule } from './strategy-routing.module';

@NgModule({
  declarations: [StrategyDashboardComponent],
  imports: [CommonModule, InformationPreviewModule, StrategyRoutingModule],
})
export class StrategyModule {}
