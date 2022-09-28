import { Component, Input, OnInit } from '@angular/core';
import { QuestionService } from "../../../Services/question.service";

@Component({
  selector: 'app-creation-card',
  templateUrl: './creation-card.component.html',
  styleUrls: ['./creation-card.component.scss']
})
export class CreationCardComponent {
  @Input() title?: string;
  @Input() isSelected = false;
}
