import { Component, OnInit } from '@angular/core';
import { Etudiant } from '../../../models/etudiant';
import { EtudiantsService } from '../../../services/etudiants.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent {
  isModifying: Boolean = false

  constructor(private etudiantsService: EtudiantsService) { }

  id: number = 0;
  prenom: string = '';
  nom: string = '';
  group: string = '';
  class: string = '';
  numero: number = 0;

  modify(): void {
    this.isModifying = !this.isModifying;
  }

  /*
  save(): void {
    this.isModifying = !this.isModifying;
    this.etudiantsService.editEtudiant(new Etudiant(this.id, this.class, this.group, this.nom, this.prenom, this.numero)).subscribe(r => {
      if (r != null) {
        this.etudiant = r
      }
      this.nom = this.etudiant.nom;
      this.prenom = this.etudiant.prenom;
      this.numero = this.etudiant.noetudiant;
      this.class = this.etudiant.classe;
      this.group = this.etudiant.groupe;
    })
  }
  */
}
