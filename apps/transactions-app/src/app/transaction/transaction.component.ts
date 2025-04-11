import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Transaction } from '../common/transaction.model';
import { CovertInEurPipe } from '../common/covert-in-eur.pipe';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css'],
  imports: [CommonModule, CovertInEurPipe],
})
export class TransactionComponent {
  @Input({ required: true }) transaction!: Transaction;
}
