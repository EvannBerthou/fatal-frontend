import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSelectChange } from "@angular/material/select";
import { InputDialogComponent } from 'src/app/features/qcms/components/input-dialog/input-dialog.component';
import { Classe } from '../../../models/classe';
import { Etudiant } from '../../../models/etudiant';
import { Groupe } from '../../../models/groupe';
import { ClasseService } from '../../../services/classe.service';
import { EtudiantsService } from '../../../services/etudiants.service';
import { GroupeService } from '../../../services/groupe.service';


@Component({
  selector: 'app-dialog-create',
  templateUrl: './dialog-create.component.html',
  styleUrls: ['./dialog-create.component.scss']
})
export class DialogCreateComponent implements OnInit {
  nom: any;
  classe: any;
  groupe: any;
  classes: Classe[] = [];
  classesList: String[] = [];
  groupes: Groupe[] = [];
  groupesList: String[] = [];
  classesForm = new FormControl('');
  groupesForm = new FormControl('');

  selectedClasse: Classe | null = null;
  id: String | null = sessionStorage.getItem('ID');
  numetu: any;
  prenom: any;
  created = false;
  constructor(public dialogRef: MatDialogRef<InputDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private etudiantsService: EtudiantsService, private classeService: ClasseService, private groupeService: GroupeService) { }

  ngOnInit(): void {
    this.classeService.getClassesFromUser(<number><unknown>this.id).subscribe(r => {
      this.classes = r;
      for (let i = 0; i < r.length; i++) {
        this.classesList.push(r[i].nom)
      }
    })

    this.groupeService.getAllGroupesOwnedByUser(<number><unknown>this.id).subscribe(r => {
      r.forEach(groupe => {
        this.classes.push(groupe.classe);
        this.classes = [...new Set(this.classes)];
        this.classesList.push(groupe.classe.nom)
        this.classesList = [...new Set(this.classesList)];
      })
    })
  }

  createEtudiant() {
    this.etudiantsService.createEtudiant({ "nom": this.nom, "prenom": this.prenom, "noetudiant": this.numetu, "classe": this.classe, "groupe": this.groupe }).subscribe(r => {
      this.created = (r != null);
      if (this.created) {
        this.dialogRef.close(new Etudiant(0, this.nom, this.prenom, this.numetu, this.classe, this.groupe));
      }
    })
  }

  onClasseChange($event: MatSelectChange) {
    for (let i = 0; i < this.classes.length; i++) {
      if (this.classes[i].nom == $event.value) {
        this.selectedClasse = this.classes[i];
      }
    }
    this.classe = $event.value;
    if (this.selectedClasse != null) {
      this.groupeService.getGroupesFromUser(<number><unknown>this.id, this.selectedClasse.id).subscribe(r => {

        this.groupes = r;
        for (let i = 0; i < r.length; i++) {
          this.groupesList.push(r[i].nom)
        }
      })
    }
  }

  onGroupeChange($event: MatSelectChange) {
    this.groupe = $event.value;
  }
}
