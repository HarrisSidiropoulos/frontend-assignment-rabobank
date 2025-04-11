import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Transaction } from '../transaction-timeline/transaction-timeline.model';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css'],
  imports: [CommonModule],
})
export class TransactionComponent {
  @Input({ required: true }) transaction!: Transaction;

  get formattedDate(): string {
    return this.transaction
      ? new Date(this.transaction.timestamp).toLocaleString()
      : '';
  }
}
