import { Component, Input } from '@angular/core';
import { Question, Reponse } from 'src/app/features/qcms/models/QCM';

@Component({
  selector: 'app-creation-question-defaut',
  templateUrl: './creation-question-defaut.component.html',
  styleUrls: ['./creation-question-defaut.component.scss']
})
export class CreationQuestionDefautComponent {
  @Input() question?: Question;
  
  addReponse(): void {
    this.question?.reponses?.push({texte: "", isRight: false} as Reponse);
  }
}
