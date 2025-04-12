import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Transaction } from '../shared/transaction.model';
import { CovertInEurPipe } from '../shared/covert-in-eur.pipe';
import { RouterLink } from '@angular/router';
import { CardComponent } from '../shared/ui/card/card.component';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss'],
  imports: [CommonModule, CovertInEurPipe, RouterLink, CardComponent],
})
export class TransactionComponent {
  @Input({ required: true }) transaction!: Transaction;
}
