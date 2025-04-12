import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { map } from 'rxjs/operators';
import type {
  GroupedTransaction,
  GroupedTransactions,
} from '../shared/transaction.model';
import { TransactionService } from '../shared/transaction.service';

export const resolveGroupedTransactions: ResolveFn<
  GroupedTransactions[]
> = () => {
  const transactionService = inject(TransactionService);

  return transactionService.getAllTransactions().pipe(
    map((transactions) => {
      const groupedMap = transactions.reduce<Map<string, GroupedTransaction[]>>(
        (map, tx) => {
          const dateKey = new Date(tx.timestamp).toISOString().slice(0, 10);

          const txGroup = map.get(dateKey) ?? [];
          txGroup.push({
            id: tx.id.toString(),
            name: tx.otherParty?.name ?? 'Unknown',
            amount: tx.amount,
            currencyRate: tx.currencyRate ?? 1,
          });

          map.set(dateKey, txGroup);
          return map;
        },
        new Map()
      );

      return Array.from(groupedMap.entries())
        .map(([date, transactions]) => ({ date, transactions }))
        .sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );
    })
  );
};
