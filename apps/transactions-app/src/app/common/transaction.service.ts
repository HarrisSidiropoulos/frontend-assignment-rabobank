import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, shareReplay, catchError, of } from 'rxjs';
import { environment } from '../../environments/environment';
import { Transaction } from './transaction.model';

export interface TransactionDay {
  id: string;
  transactions: Transaction[];
}

interface TransactionResponse {
  days: TransactionDay[];
}

@Injectable({ providedIn: 'root' })
export class TransactionService {
  http = inject(HttpClient);

  private transactions$ = this.http
    .get<TransactionResponse>(`${environment.apiUrl}/transactions`)
    .pipe(
      map(this.flattenTransactions),
      shareReplay(1),
      catchError((err) => {
        console.error('Error fetching transactions', err);
        return of([]);
      })
    );

  getAllTransactions(): Observable<Transaction[]> {
    return this.transactions$;
  }

  private flattenTransactions(response: TransactionResponse): Transaction[] {
    return response.days.flatMap((day) =>
      day.transactions.map((tx) => ({
        ...tx,
        currencyRate: tx.currencyRate ?? 1,
      }))
    );
  }
}
