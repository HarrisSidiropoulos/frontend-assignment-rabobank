import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { map } from 'rxjs/operators';
import type { Transaction } from '../shared/transaction.model';
import { TransactionService } from '../shared/transaction.service';

export const resolveTransaction: ResolveFn<Transaction | undefined> = (
  route
) => {
  const transactionService = inject(TransactionService);
  const { date, id } = route.params;

  return transactionService.getAllTransactions().pipe(
    map((transactions) =>
      transactions.find((tx) => {
        const txDate = new Date(tx.timestamp).toISOString().slice(0, 10);
        return txDate === date && tx.id.toString() === id;
      })
    )
  );
};
