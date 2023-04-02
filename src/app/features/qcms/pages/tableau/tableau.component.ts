import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { QcmService } from "../../services/qcm.service";
import { Router } from "@angular/router";
import { MatDialog } from "@angular/material/dialog";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { QCM } from '../../models/QCM';
import { InputDialogComponent } from '../../components/input-dialog/input-dialog.component';

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.scss']
})
export class TableauComponent {
  displayedColumns: string[] = ['modify', 'mark', 'correction'];
  private dataSource = new MatTableDataSource<QCM>();

  qcms$: Observable<MatTableDataSource<QCM>> = this.qcmService.getQCMFromUser().pipe(
    map((qcms: QCM[]) => {
      this.dataSource.data = qcms;
      return this.dataSource;
    })
  );

  constructor(public dialog: MatDialog, private qcmService: QcmService, private router: Router) {
    // Fonction appelé sur chaque élément lors du filtrage. Vérifie juste si le titre contient sans prendre en compte la casse
    this.dataSource.filterPredicate = (data: QCM, filter: string) => data.titre?.toLowerCase().includes(filter);
  }

  applyFilter(event: Event) {
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
      if (!result?.trim()) return;

      this.qcmService.createNewQCM(result).subscribe(qcm => {
        this.router.navigate(['/creation', qcm.id, '/questions']);
      });
    });

  }
}
