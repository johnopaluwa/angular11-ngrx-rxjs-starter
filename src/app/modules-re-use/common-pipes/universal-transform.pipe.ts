import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'universalTransform',
  pure: true
})
export class UniversalTransformPipe implements PipeTransform {
  transform(value: unknown, transform: (...values: any) => any, ...additionalParams: any): any {
    return transform(value, ...additionalParams);
  }
}
