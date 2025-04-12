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

  private transactionsCache$: Observable<Transaction[]> | null = null;

  private get transactions$(): Observable<Transaction[]> {
    if (!this.transactionsCache$) {
      this.transactionsCache$ = this.http
        .get<TransactionResponse>(`${environment.apiUrl}/transactions`)
        .pipe(
          map(this.flattenTransactions),
          shareReplay(1),
          catchError((err) => {
            console.error('Error fetching transactions', err);
            return of([]);
          })
        );
    }
    return this.transactionsCache$;
  }

  getAllTransactions(): Observable<Transaction[]> {
    return this.transactions$;
  }

  getTransactionByDateAndId(
    date: string,
    id: string
  ): Observable<Transaction | undefined> {
    return this.transactions$.pipe(
      map((transactions) =>
        transactions.find((tx) => {
          const txDate = new Date(tx.timestamp).toISOString().slice(0, 10);
          return txDate === date && tx.id.toString() === id;
        })
      )
    );
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
