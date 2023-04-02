import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CorrectionComponent } from "./components/correction/correction.component";
import { NotesComponent } from "./components/notes/notes.component";
import { AccueilComponent } from "./pages/accueil/accueil.component";
import { CreationQCMComponent } from "./pages/creation-qcm/creation-qcm.component";
import { TableauComponent } from "./pages/tableau/tableau.component";

const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'accueil', component: AccueilComponent },
  { path: 'mesqcm', component: TableauComponent },
  { path: 'creation/:id/:step', component: CreationQCMComponent },
  { path: 'creation/:id', component: CreationQCMComponent },
  { path: 'notes/:id', component: NotesComponent },
  { path: 'correction/:id', component: CorrectionComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],

})
export class QCMRoutingModule { }
