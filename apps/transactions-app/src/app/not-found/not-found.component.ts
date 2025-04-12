import { Component } from '@angular/core';
import { CardComponent } from '../shared/ui/card/card.component';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss',
  imports: [CardComponent],
})
export class NotFoundComponent {}
