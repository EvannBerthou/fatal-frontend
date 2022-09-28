import { Component, Input, OnInit } from '@angular/core';
import { Categorie } from "../../../Modeles/CATEGORIE";
import { Question } from "../../../Modeles/QUESTION";
import { Reponse } from "../../../Modeles/REPONSE";
import { InputDialogComponent } from "../../Accueil/input-dialog/input-dialog.component";
import { MatDialog } from "@angular/material/dialog";
import { QuestionService } from "../../../Services/question.service";
import { QCM } from "../../../Modeles/QCM";
import { Options } from "../../../Modeles/OPTIONS";

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

  constructor(public dialog: MatDialog, private questionService: QuestionService) {
  }

  /*
  modifyName() {
    const dialogRef = this.dialog.open(InputDialogComponent, {
      width: '35%',
      height: '17%',
      panelClass: 'custom-dialog-container',
      data: { button: 'Modifier', placeholder: 'Nom', name: this.selectedQuestion.texte },
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.modifyQuestionName(result);
        this.questionService.isNotSaved.next(false);
      }
    });
  }


  setType() {
    if (this.selected === "defaut") {
      let compt = 0;
      for (let i = 0; i < this.question.reponses.length; i++) {
        if (this.question.reponses[i].isGood) {
          compt++;
        }
      }
      if (compt > 1) {
        this.question.typeDeQuestion = 'MULTIPLE';
      }
      else {
        this.question.typeDeQuestion = 'UNIQUE';
      }
    }
    else if (this.selected === 'numerique') {
      this.question.typeDeQuestion = 'NUMERIQUE';
    }
    else {
      this.question.typeDeQuestion = 'OUVERTE';
    }
    this.questionService.reloadQCM(this.QCM);
  }

  modifyQuestion(questionSt: string) {
    this.question.intitule = questionSt;
    this.questionService.reloadQCM(this.QCM);
  }

  typeChange() {
    this.question.options = new Options('null', []);
    this.question.reponses = [];
  }
  */
}
