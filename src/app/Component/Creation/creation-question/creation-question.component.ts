import { Component, Input } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";

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

  constructor(public dialog: MatDialog) {
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
  */
}
