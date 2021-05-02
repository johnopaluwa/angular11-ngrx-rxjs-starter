import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import { InformationPreviewComponent } from './information-preview.component';

@NgModule({
  declarations: [InformationPreviewComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    TranslateModule.forChild({
      extend: true,
    }),
  ],
  exports: [InformationPreviewComponent],
})
export class InformationPreviewModule {}
