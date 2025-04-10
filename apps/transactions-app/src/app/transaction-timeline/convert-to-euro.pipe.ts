// ConvertToCurrencyPipe
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'convertToEuro',
})
export class ConvertToEuroPipe implements PipeTransform {
  transform(value: number, rate: number): string {
    const val = parseFloat(value.toFixed(2));
    const amountInCurrency = val * rate;
    return amountInCurrency.toFixed(2);
  }
}
