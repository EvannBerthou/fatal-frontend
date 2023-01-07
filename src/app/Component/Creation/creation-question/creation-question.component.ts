import { Component, Input } from '@angular/core';

interface Choix {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-creation-question',
  templateUrl: './creation-question.component.html',
  styleUrls: ['./creation-question.component.scss']
})
export class CreationQuestionComponent {
  @Input() selectedQuestion!: any;

  choix: Choix[] = [
    { value: 'multiple', viewValue: 'Multiple' },
    { value: 'ouverte', viewValue: 'Ouverte' },
    { value: 'numerique', viewValue: 'Numérique' },
  ];
}
