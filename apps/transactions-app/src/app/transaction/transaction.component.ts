import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Transaction } from '../common/transaction.model';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css'],
  imports: [CommonModule],
})
export class TransactionComponent {
  @Input({ required: true }) transaction!: Transaction;
}
