import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { map } from 'rxjs/operators';
import type { Transaction } from '../common/transaction.model';
import { TransactionService } from '../common/transaction.service';

export const resolveTransaction: ResolveFn<Transaction> = (route) => {
  const transactionService = inject(TransactionService);
  const { date, id } = route.params;

  return transactionService.getAllTransactions().pipe(
    map((transactions) => {
      return transactions.filter((tx) => {
        const transactionDate = new Date(tx.timestamp)
          .toISOString()
          .slice(0, 10);
        return transactionDate === date && tx.id.toString() === id;
      })?.[0];
    })
  );
};
