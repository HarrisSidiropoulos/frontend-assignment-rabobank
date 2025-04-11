import { Route } from '@angular/router';
import { TransactionTimelineComponent } from './transaction-timeline/transaction-timeline.component';
import { resolveGroupedTransactions } from './transaction-timeline/grouped-transactions.resolver';

export const appRoutes: Route[] = [
  {
    path: '',
    component: TransactionTimelineComponent,
    resolve: {
      groupedTransactions: resolveGroupedTransactions,
    },
  },
];
