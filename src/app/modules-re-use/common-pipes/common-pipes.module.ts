import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UniversalTransformPipe } from './universal-transform.pipe';

@NgModule({
  declarations: [UniversalTransformPipe],
  imports: [CommonModule],
  exports: [UniversalTransformPipe],
})
export class CommonPipesModule {}
