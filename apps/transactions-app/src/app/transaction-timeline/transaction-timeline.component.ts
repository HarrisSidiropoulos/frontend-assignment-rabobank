import { Component, inject, OnInit } from '@angular/core';
import type { GroupedTransactions } from './transaction-timeline.model';
import { TransactionService } from './transaction.service';
import { CommonModule, NgFor } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-transaction-timeline',
  templateUrl: './transaction-timeline.component.html',
  styleUrls: ['./transaction-timeline.component.scss'],
  providers: [TransactionService],
  imports: [NgFor, CommonModule],
})
export class TransactionTimelineComponent implements OnInit {
  groupedTransactions: GroupedTransactions[] = [];
  route = inject(ActivatedRoute);

  ngOnInit() {
    this.route.data.subscribe(({ groupedTransactions }) => {
      this.groupedTransactions = groupedTransactions;
    });
  }
}
