import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EditUserComponent } from "./components/edit-user/edit-user.component";
import { GestionUsersComponent } from "./components/gestion-users/gestion-users.component";
import { NewUserComponent } from "./components/new-user/new-user.component";

const routes: Routes = [
  {
    path: 'users', component: GestionUsersComponent,
    children: [
      { path: 'new', component: NewUserComponent },
      { path: 'edit', component: EditUserComponent },
      { path: 'edit/:id', component: EditUserComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],

})
export class AdminRoutingModule { }

