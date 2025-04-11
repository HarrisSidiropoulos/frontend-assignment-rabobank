import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { map } from 'rxjs/operators';
import { TransactionService } from './transaction.service';
import type {
  GroupedTransaction,
  GroupedTransactions,
} from './transaction-timeline.model';

export const resolveGroupedTransactions: ResolveFn<
  GroupedTransactions[]
> = () => {
  const transactionService = inject(TransactionService);

  return transactionService.getAllTransactions().pipe(
    map((transactions) => {
      const grouped = new Map<string, GroupedTransaction[]>();

      transactions.forEach((tx) => {
        const date = new Date(tx.timestamp).toDateString();
        const amountInEur =
          tx.currencyCode === 'EUR'
            ? tx.amount
            : tx.amount / (tx?.currencyRate ?? 1);

        if (!grouped.has(date)) {
          grouped.set(date, []);
        }

        grouped.get(date)?.push({
          id: tx.id.toString(),
          name: tx.otherParty?.name ?? 'Unknown',
          amountInEur,
        });
      });

      return Array.from(grouped.entries())
        .map(([date, transactions]) => ({ date, transactions }))
        .sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );
    })
  );
};
