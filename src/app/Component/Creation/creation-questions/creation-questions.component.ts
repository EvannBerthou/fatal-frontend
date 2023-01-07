import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Categorie } from 'src/app/Modeles/CATEGORIE';
import { Question } from 'src/app/Modeles/QUESTION';
import { Reponse } from 'src/app/Modeles/REPONSE';
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

  constructor(public dialog: MatDialog, public router: Router) { }

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
}
