import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Transaction } from '../shared/transaction.model';
import { CovertInEurPipe } from '../shared/covert-in-eur.pipe';
import { CardComponent } from '../shared/ui/card/card.component';
import { BackLinkComponent } from '../shared/ui/back-link/back-link.component';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss'],
  imports: [CommonModule, CovertInEurPipe, CardComponent, BackLinkComponent],
})
export class TransactionComponent {
  @Input({ required: true }) transaction!: Transaction;
}
