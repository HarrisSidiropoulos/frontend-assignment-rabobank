import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Transaction } from '../common/transaction.model';
import { CovertInEurPipe } from '../common/covert-in-eur.pipe';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss'],
  imports: [CommonModule, CovertInEurPipe, RouterLink],
})
export class TransactionComponent {
  @Input({ required: true }) transaction!: Transaction;
}
