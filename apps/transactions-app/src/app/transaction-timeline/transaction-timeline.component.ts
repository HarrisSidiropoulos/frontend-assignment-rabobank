import { Component, Input } from '@angular/core';
import type { GroupedTransactions } from './transaction-timeline.model';
import { CommonModule, NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-transaction-timeline',
  templateUrl: './transaction-timeline.component.html',
  styleUrls: ['./transaction-timeline.component.scss'],
  imports: [NgFor, CommonModule, RouterLink],
})
export class TransactionTimelineComponent {
  @Input() groupedTransactions: GroupedTransactions[] = [];
}
