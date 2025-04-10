import { Component, inject, Input, OnInit } from '@angular/core';
import type {
  GroupedTransactions,
  Transaction,
} from './transaction-timeline.model';
import { TransactionService } from './transaction.service';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-transaction-timeline',
  templateUrl: './transaction-timeline.component.html',
  styleUrls: ['./transaction-timeline.component.scss'],
  providers: [TransactionService],
  imports: [NgFor, CommonModule],
})
export class TransactionTimelineComponent implements OnInit {
  @Input() usdToEurRate = 0.9;

  transactions: Transaction[] = [];
  loading = true;
  transactionService = inject(TransactionService);

  groupedTransactions: GroupedTransactions[] = [];

  ngOnInit(): void {
    this.loading = true;

    this.transactionService.getAllTransactions().subscribe({
      next: (txs) => {
        this.transactions = txs;
        this.groupAndSortTransactions();
        this.loading = false;
      },
      error: (e) => {
        console.log('error', e);
        this.loading = false;
      },
    });
  }

  private groupAndSortTransactions(): void {
    const grouped = new Map<string, { name: string; amountInEur: number }[]>();

    this.transactions.forEach((tx) => {
      const date = new Date(tx.timestamp).toISOString();
      const amountInEur =
        tx.currencyCode === 'EUR'
          ? tx.amount
          : tx.amount * (tx.currencyRate ?? 1);

      if (!grouped.has(date)) {
        grouped.set(date, []);
      }

      grouped.get(date)?.push({
        name: tx.otherParty?.name ?? 'Unknown',
        amountInEur: parseFloat(amountInEur.toFixed(2)),
      });
    });

    this.groupedTransactions = Array.from(grouped.entries())
      .map(([date, transactions]) => ({ date, transactions }))
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }
}
