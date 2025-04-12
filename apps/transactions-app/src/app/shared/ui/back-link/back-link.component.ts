import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-back-link',
  templateUrl: './back-link.component.html',
  styleUrl: './back-link.component.scss',
  imports: [RouterLink],
})
export class BackLinkComponent {
  @Input() link = '';
}
