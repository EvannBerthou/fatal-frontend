import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { QCM } from "../../Modeles/QCM";
import { QcmService } from "../../Services/qcm.service";
import { InputDialogComponent } from "../Accueil/input-dialog/input-dialog.component";
import { QuestionService } from "../../Services/question.service";
import { Router } from "@angular/router";
import { MatDialog } from "@angular/material/dialog";
import { AuthenticationService } from "../../Services/authentication.service";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.scss']
})
export class TableauComponent implements OnInit {
  private dataSource = new MatTableDataSource<QCM>();

  qcms$: Observable<MatTableDataSource<QCM>> = this.service.getQCMFromUser().pipe(
    map((qcms: QCM[]) => {
      this.dataSource.data = qcms;
      return this.dataSource;
    })
  );

  constructor(public dialog: MatDialog, private service: QcmService, private questionService: QuestionService, private router: Router, private authentService: AuthenticationService) {
  }

  displayedColumns: string[] = ['name', 'modify', 'mark', 'correction'];

  ngOnInit(): void {
  }

  applyFilter(event: Event) {
    this.dataSource.filterPredicate = function (data, filter: string): boolean {
      return data.titre.toLowerCase().includes(filter);
    };
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(InputDialogComponent, {
      width: '35%',
      height: '17%',
      panelClass: 'custom-dialog-container',
      data: { button: 'Créer', placeholder: 'MON QCM', name: '' },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result)
        localStorage.removeItem("selector");
      localStorage.removeItem('QCM');
      this.questionService.reloadQCM(QCM.createEmptyQCM(this.authentService.getId()!.toString()));
      this.router.navigate(['/creation', result])
    });

  }

  onCorrection(qcm: QCM) {
    this.router.navigate([`/correction/${qcm.id}`]);
  }

  modifierQcm(qcm: QCM) {
    this.router.navigate([`/creation/${qcm.id}/questions`]);
    //this.questionService.reloadQCM(qcm);
  }

  onNotes(qcm: QCM) {
    this.router.navigate([`/notes/${qcm.id}`]);
  }

}
