import { Route } from '@angular/router';
import { TransactionTimelineComponent } from './transaction-timeline/transaction-timeline.component';
import { resolveGroupedTransactions } from './transaction-timeline/grouped-transactions.resolver';
import { TransactionComponent } from './transaction/transaction.component';
import { resolveTransaction } from './transaction/transaction.resolver';
import { NotFoundComponent } from './not-found/not-found.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: TransactionTimelineComponent,
    resolve: {
      groupedTransactions: resolveGroupedTransactions,
    },
  },
  {
    path: ':date/:id',
    component: TransactionComponent,
    resolve: {
      transaction: resolveTransaction,
    },
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
