import { Component } from '@angular/core';
import { CardComponent } from '../shared/ui/card/card.component';
import { BackLinkComponent } from '../shared/ui/back-link/back-link.component';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss',
  imports: [CardComponent, BackLinkComponent],
})
export class NotFoundComponent {}
