import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import type { Transaction } from './transaction-timeline.model';

export interface TransactionDay {
  id: string;
  transactions: Transaction[];
}

@Injectable({ providedIn: 'root' })
export class TransactionService {
  constructor(private http: HttpClient) {}

  getAllTransactions(): Observable<Transaction[]> {
    return this.http
      .get<{ days: TransactionDay[] }>('http://localhost:8080/api/transactions')
      .pipe(
        map((data) => {
          console.log(data);
          return data.days.flatMap((day) =>
            day.transactions.map((tx) => ({
              ...tx,
              timestamp: tx.timestamp,
              currencyRate: tx.currencyRate ?? 1,
            }))
          );
        })
      );
  }
}
