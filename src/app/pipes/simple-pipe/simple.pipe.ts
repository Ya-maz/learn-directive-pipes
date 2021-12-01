import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myCustom'
})
export class SimplePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if (value) {
      return `[${value}]`;
    }
    else {
      return "";
    }
  }
}
