import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from "@angular/material/table";
import { User } from 'src/app/core/models/USER';
import { GestionUsersService } from 'src/app/features/admin/services/gestion-users.service';
import { Classe } from '../../models/classe';
import { Groupe } from '../../models/groupe';
import { ClasseService } from '../../services/classe.service';
import { GroupeService } from '../../services/groupe.service';

@Component({
  selector: 'app-classegroupes',
  templateUrl: './classegroupes.component.html',
  styleUrls: ['./classegroupes.component.scss']
})
export class ClassegroupesComponent implements OnInit {
  id = sessionStorage.getItem("ID");
  classes: Classe[] = [];
  groupes: Groupe[] = [];
  user: User | null = ({ id: 0, username: 'username', email: 'email', prenom: 'name', nom: 'surname', admin: false }) as User;
  dataSource = new MatTableDataSource<Classe>();
  displayedColumns: string[] = ['name', 'partOf', 'groupes', 'join', 'unownclass'];
  displayedColumnsGroupes: string[] = ['name', 'partOf', 'join', 'unowngroup'];
  constructor(private classeService: ClasseService, private groupeService: GroupeService, private userService: GestionUsersService) { }

  ngOnInit(): void {
    if (this.id != null) {
      this.userService.getUserFromId(<number><unknown>this.id).subscribe(r => {
        this.user = r;
      });
    }
    this.classeService.getClasses().subscribe();
  }

  applyFilter(event: Event) {
    this.dataSource.filterPredicate = function(data, filter: string): boolean {
      return data.nom.toLowerCase().includes(filter);
    };
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  showGroups(classe: Classe) {
  }

  ownClasse(classe: Classe) {
    if (this.user != null) {
      classe.professeurs.push(this.user);
    }
    this.classeService.ownClasse(classe).subscribe((r) => {
      //classe.estmaclasse = r != null;
    })
  }

  openDialog() {
  }

  ownGroup(groupe: Groupe) {
    if (this.user != null) {
      groupe.professeurs.push(this.user);
    }
    this.groupeService.ownGroupe(groupe).subscribe((r) => {
      //groupe.estmongroupe = r != null;
    })
  }

  removeClasse(classe: Classe) {
    if (this.user != null) {
      this.classeService.deleteFromProfesseurs(this.user, classe).subscribe(r => {
        //classe.estmaclasse = !r;
      })
    }
  }

  removeGroupe(groupe: Groupe) {
    if (this.user != null) {
      this.groupeService.deleteFromProfesseurs(this.user, groupe).subscribe(r => {
        //groupe.estmongroupe = !r;
      })
    }
  }
}
