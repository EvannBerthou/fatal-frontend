import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { GestionUsersComponent } from './components/gestion-users/gestion-users.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { UserInformationsFormComponent } from './components/user-informations-form/user-informations-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SharedModule } from 'src/app/shared/shared.module';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { NewUserComponent } from './components/new-user/new-user.component';

@NgModule({
  declarations: [
    GestionUsersComponent,
    EditUserComponent,
    NewUserComponent,
    UserInformationsFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AdminRoutingModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    SharedModule,
  ]
})
export class AdminModule { }
