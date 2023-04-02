import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bouton',
  templateUrl: './bouton.component.html',
  styleUrls: ['./bouton.component.scss']
})
export class BoutonComponent {
  @Input() name = '';
  @Input() select = true;
}
