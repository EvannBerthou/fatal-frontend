import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Categorie } from 'src/app/Modeles/CATEGORIE';
import { Question } from 'src/app/Modeles/QUESTION';
import { Reponse } from 'src/app/Modeles/REPONSE';
import { QcmService } from 'src/app/Services/qcm.service';
import { QCM } from "../../../Modeles/QCM";
import { InputDialogComponent } from '../../Accueil/input-dialog/input-dialog.component';

@Component({
  selector: 'app-creation-questions',
  templateUrl: './creation-questions.component.html',
  styleUrls: ['./creation-questions.component.scss']
})
export class CreationQuestionsComponent implements OnInit {
  @Input() qcm!: QCM;
  selectedCategorie!: Categorie;
  selectedQuestion!: Question;
  saving = false;

  constructor(public dialog: MatDialog, public router: Router, private qcmService: QcmService) { }

  ngOnInit(): void {
    this.selectCategorie(this.qcm.categories[0]);
  }

  selectCategorie(categorie: Categorie) {
    this.selectedCategorie = categorie;
    this.selectedQuestion = this.selectedCategorie?.questions[0];
  }

  selectQuestion(question: Question) {
    this.selectedQuestion = question;
  }

  addCategorie(): void {
    this.getPopupInputName('Categorie').subscribe(texte => {
      this.qcm.categories.push({ texte, questions: [] as Question[]} as Categorie);
    });
  }

  addQuestion(): void {
    this.getPopupInputName('Question').subscribe(texte => {
      this.selectedCategorie.questions.push({ texte, reponses: [] as Reponse[] } as Question);
    });
  }

  /**
   *
   * @param placeholder Le texte qui sera affiché en indication dans le pop-up
   * @returns Un observable uniquement si un résultat à été donné
   */
  private getPopupInputName(placeholder: string) {
    return this.dialog.open(InputDialogComponent, {
      width: '35%',
      height: '17%',
      panelClass: 'custom-dialog-container',
      data: { button: 'Créer', placeholder },
    }).afterClosed().pipe(filter(result => result))
  }

  deleteCategorie(){
    this.qcm.categories.splice(this.qcm.categories.indexOf(this.selectedCategorie),1)
    this.selectCategorie(this.qcm.categories[0])
  }
  deleteQuestion(){
    const index = this.qcm.categories.indexOf(this.selectedCategorie);
    const categorie = this.qcm.categories[index];
    const questionIndex = categorie.questions.indexOf(this.selectedQuestion);
    categorie.questions.splice(questionIndex, 1);
    this.selectCategorie(this.selectedCategorie)
  }
}
