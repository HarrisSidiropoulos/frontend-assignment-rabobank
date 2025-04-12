import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import type { Transaction } from '../shared/transaction.model';
import { TransactionService } from '../shared/transaction.service';

export const resolveTransaction: ResolveFn<Transaction | undefined> = (
  route
) => {
  const transactionService = inject(TransactionService);
  const { date, id } = route.params;

  return transactionService.getTransactionByDateAndId(date, id);
};
