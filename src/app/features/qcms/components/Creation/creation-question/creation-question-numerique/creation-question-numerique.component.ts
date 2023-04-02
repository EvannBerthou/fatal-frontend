import { Component, OnInit } from '@angular/core';
import { Categorie, QCM, Question } from 'src/app/features/qcms/models/QCM';

@Component({
  selector: 'app-creation-question-numerique',
  templateUrl: './creation-question-numerique.component.html',
  styleUrls: ['./creation-question-numerique.component.scss']
})
export class CreationQuestionNumeriqueComponent {
  QCM !: QCM;
  categorie!: Categorie;
  question!: Question;
  reponseNum: any;
  notationNum: any;
}

