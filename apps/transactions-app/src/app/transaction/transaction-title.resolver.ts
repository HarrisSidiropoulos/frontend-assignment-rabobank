import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { TransactionService } from '../shared/transaction.service';
import { map } from 'rxjs';

export const resolveTransactionTitle: ResolveFn<string> = (route) => {
  const transactionService = inject(TransactionService);
  const { date, id } = route.params;

  return transactionService.getTransactionByDateAndId(date, id).pipe(
    map((transaction) => {
      if (!transaction) {
        return 'Unknown transaction';
      }
      return transaction.otherParty?.name ?? 'Unknown';
    })
  );
};
