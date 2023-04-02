import { Component, Input } from '@angular/core';
import { MatTableDataSource } from "@angular/material/table";
import { Categorie, QCM, Question } from '../../../models/QCM';

@Component({
  selector: 'app-creation-parametres',
  templateUrl: './creation-parametres.component.html',
  styleUrls: ['./creation-parametres.component.scss']
})
export class CreationParametresComponent {
  displayedColumns = ['nom', 'nombre', 'total'];
  dataSource!: MatTableDataSource<Categorie>;
  @Input() qcm!: QCM;
  categorie!: Categorie;
  question!: Question;
}
