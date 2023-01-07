import { Component, Input } from '@angular/core';
import { Question } from "../../../../Modeles/QUESTION";
import { Reponse } from "../../../../Modeles/REPONSE";

@Component({
  selector: 'app-creation-question-defaut',
  templateUrl: './creation-question-defaut.component.html',
  styleUrls: ['./creation-question-defaut.component.scss']
})
export class CreationQuestionDefautComponent {
  @Input() question!: Question;
  
  addReponse(): void {
    this.question.reponses.push({texte: "", isRight: false} as Reponse);
  }
}
