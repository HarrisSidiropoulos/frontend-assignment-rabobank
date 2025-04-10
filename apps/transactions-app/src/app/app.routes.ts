import { Route } from '@angular/router';
import { TransactionTimelineComponent } from './transaction-timeline/transaction-timeline.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: TransactionTimelineComponent,
  },
];
