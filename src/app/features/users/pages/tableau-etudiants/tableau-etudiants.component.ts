import { MatTableDataSource } from '@angular/material/table';
import { Router } from "@angular/router";
import { MatDialog } from "@angular/material/dialog";
import { DialogCreateComponent } from "./dialog-create/dialog-create.component";
import { Component, OnInit } from '@angular/core';
import { ClasseService } from '../../services/classe.service';
import { GroupeService } from '../../services/groupe.service';
import { EtudiantsService } from '../../services/etudiants.service';
import { Etudiant, IEtudiant } from '../../models/etudiant';
import { Classe } from '../../models/classe';
import { Groupe } from '../../models/groupe';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-tableau-etudiants',
  templateUrl: './tableau-etudiants.component.html',
  styleUrls: ['./tableau-etudiants.component.scss']
})

export class TableauEtudiantsComponent implements OnInit {
  etudiants: IEtudiant[] = [];
  dataSource = new MatTableDataSource<IEtudiant>();
  classes: Classe[] = [];
  groupes: Groupe[] = [];
  classesAndGroupes = {} as IDictionary;
  displayedColumns: string[] = ['name', 'surname', 'numetu', 'class', 'group', 'profil'];
  added: number = -1;
  isFileHere: boolean = false;

  constructor(public dialog: MatDialog, private router: Router, private etudiantsService: EtudiantsService, private groupeService: GroupeService, private classeService: ClasseService, private authService: AuthenticationService) { }

  ngOnInit(): void {
    this.dataSource.filterPredicate = (data, filter: string) => data.nom.toLowerCase().includes(filter.toLowerCase());

    const user = this.authService.getUser();
    if (!user?.id) return;

    this.etudiantsService.getEtudiantFromUser(user.id).subscribe(etudiants => {
      this.etudiants = etudiants;
      this.dataSource.data = this.etudiants;
    });

    //TODO: La logique doit être dans le back. Je le laisse pour garder une trace de ce qu'on souhaite faire
    this.classeService.getClassesFromUser(user.id).subscribe(classes => {
      this.classes = classes;
      this.classes.forEach(classe => {
        this.groupeService.getGroupesFromUser(classe.id, user.id).subscribe(groupes => {
          this.classesAndGroupes[classe.nom] = groupes.map(groupe => groupe.nom);
        });
      });
    })
  }

  showProfil(etudiant: Etudiant): void {
    this.router.navigate(['/etudiants/profil/', etudiant.id]);
  }

  applyFilter(event: Event) {
    this.dataSource.filter = (event.target as HTMLInputElement).value;
  }

  openDialog(): void {
    this.dialog.open(DialogCreateComponent, { data: { title: "Création d'un étudiant" } }).afterClosed().subscribe(result => {
      if (result.trim()) {
        this.etudiants.push(result);
        this.dataSource.data = this.etudiants;
      }
    });
  }
}

interface IDictionary {
  [index: string]: string[];
}
