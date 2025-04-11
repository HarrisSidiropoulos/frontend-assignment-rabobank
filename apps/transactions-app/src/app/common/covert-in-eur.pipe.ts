import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertInEur',
})
export class CovertInEurPipe implements PipeTransform {
  transform(value: number, currencyRate?: number): number {
    return value / (currencyRate ?? 1);
  }
}
