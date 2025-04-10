import { Component, inject, Input, OnInit } from '@angular/core';
import type {
  GroupedTransactions,
  Transaction,
} from './transaction-timeline.model';
import { CurrencyService } from './currency.service';
import { TransactionService } from './transaction.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-transaction-timeline',
  templateUrl: './transaction-timeline.component.html',
  styleUrls: ['./transaction-timeline.component.scss'],
  providers: [TransactionService],
  imports: [NgFor],
})
export class TransactionTimelineComponent implements OnInit {
  @Input() usdToEurRate = 0.9;

  transactions: Transaction[] = [];
  loading = true;
  currencyService = inject(CurrencyService);
  transactionService = inject(TransactionService);

  groupedTransactions: GroupedTransactions[] = [];

  ngOnInit(): void {
    this.loading = true;

    this.currencyService.getUsdToEurRate().subscribe({
      next: (rate) => {
        this.usdToEurRate = rate;
        console.log('USD to EUR rate:', rate);
      },
      error: (e) => {
        console.log('error', e);
        // handle error
      },
    });

    this.transactionService.getAllTransactions().subscribe({
      next: (txs) => {
        this.transactions = txs;
        this.groupAndSortTransactions();
        this.loading = false;
      },
      error: (e) => {
        console.log('error', e);
        this.loading = false;
        // handle error
      },
    });
  }

  private groupAndSortTransactions(): void {
    const grouped = new Map<string, { name: string; amountInEur: number }[]>();

    this.transactions.forEach((tx) => {
      const date = new Date(tx.timestamp).toDateString();
      const amountInEur =
        tx.currencyCode === 'EUR' ? tx.amount : tx.amount * this.usdToEurRate;

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
