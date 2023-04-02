import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ClassegroupesComponent } from "./components/classegroupes/classegroupes.component";
import { ConnexionComponent } from "./components/Connexion/connexion.component";
import { MonprofilComponent } from "./pages/monprofil/monprofil.component";
import { ProfilComponent } from "./pages/tableau-etudiants/profil/profil.component";
import { TableauEtudiantsComponent } from "./pages/tableau-etudiants/tableau-etudiants.component";

const routes: Routes = [
  { path: 'etudiants', component: TableauEtudiantsComponent},
  { path: 'classesgroupes', component: ClassegroupesComponent},
  { path: 'etudiants/profil/:name', component: ProfilComponent},
  { path: 'monprofil', component: MonprofilComponent},
  { path: 'login', component: ConnexionComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],

})
export class UsersRoutingModule { }
