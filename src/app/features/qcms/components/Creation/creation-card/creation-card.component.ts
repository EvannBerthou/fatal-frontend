import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-creation-card',
  templateUrl: './creation-card.component.html',
  styleUrls: ['./creation-card.component.scss']
})
export class CreationCardComponent {
  @Input() title?: string;
  @Input() isSelected = false;
}
