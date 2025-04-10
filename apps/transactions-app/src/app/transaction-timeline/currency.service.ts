import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CurrencyService {
  private apiKey = '8446530a61e904e6a741e22805a9daad';
  private apiUrl = 'https://api.exchangerate.host/convert';

  constructor(private http: HttpClient) {}

  getUsdToEurRate(): Observable<number> {
    const url = `${this.apiUrl}?access_key=${this.apiKey}&from=USD&to=EUR&amount=1`;

    return this.http.get<any>(url).pipe(
      map((response) => {
        if (response.success && typeof response.result === 'number') {
          return response.result;
        } else {
          throw new Error('Failed to fetch exchange rate');
        }
      }),
      catchError((error) => {
        console.error('CurrencyService error:', error);
        return throwError(() => new Error('Could not retrieve exchange rate.'));
      })
    );
  }
}
