import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { QCM } from "../../../Modeles/QCM";

@Component({
  selector: 'app-creation-questions',
  templateUrl: './creation-questions.component.html',
  styleUrls: ['./creation-questions.component.scss']
})
export class CreationQuestionsComponent implements OnInit {
  @Input() qcm!: QCM;
  selectedCategorie?: any;
  selectedQuestion?: any;

  constructor(public dialog: MatDialog, public router: Router) { }

  ngOnInit(): void {
    this.selectedCategorie = this.qcm.categories[0];
    this.selectedQuestion = this.selectedCategorie?.questions[0];
  }

  selectCategorie(categorie: any) {
    this.selectedCategorie = categorie;
    this.selectedQuestion = this.selectedCategorie.questions[0];
  }

  selectQuestion(question: any) {
    this.selectedQuestion = question;
  }

  /*
  addCategorie(): void {
    const dialogRef = this.dialog.open(InputDialogComponent, {
      width: '35%',
      height: '17%',
      panelClass: 'custom-dialog-container',
      data: { button: 'Créer', placeholder: 'Catégorie', name: '' },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.ajoutCategorie(result);
      }
      else {
        if (!(this.categories.length > 0)) {
          this.categories = [];
        }

      }
    });
  }

  addQuestion(): void {
    this.ajoutQuestion();
  }
  */
}
