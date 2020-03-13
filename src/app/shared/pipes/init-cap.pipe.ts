import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'initCap'
})
export class InitCapPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}