import { Component, Input } from '@angular/core';
import type { GroupedTransactions } from '../shared/transaction.model';
import { CommonModule, NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CovertInEurPipe } from '../shared/covert-in-eur.pipe';
import { CardComponent } from '../shared/ui/card/card.component';

@Component({
  selector: 'app-transaction-timeline',
  templateUrl: './transaction-timeline.component.html',
  styleUrls: ['./transaction-timeline.component.scss'],
  imports: [NgFor, CommonModule, RouterLink, CovertInEurPipe, CardComponent],
})
export class TransactionTimelineComponent {
  @Input() groupedTransactions: GroupedTransactions[] = [];
}
