import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassegroupesComponent } from './components/classegroupes/classegroupes.component';
import { ConnexionComponent } from './components/Connexion/connexion.component';
import { UsersRoutingModule } from './users-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MonprofilComponent } from './pages/monprofil/monprofil.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { TableauEtudiantsComponent } from './pages/tableau-etudiants/tableau-etudiants.component';
import { DialogCreateComponent } from './pages/tableau-etudiants/dialog-create/dialog-create.component';
import { ProfilComponent } from './pages/tableau-etudiants/profil/profil.component';


@NgModule({
  declarations: [
    ConnexionComponent,
    ClassegroupesComponent,
    TableauEtudiantsComponent,
    DialogCreateComponent,
    ProfilComponent,
    MonprofilComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UsersRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatCardModule,
    MatSelectModule,
    MatSnackBarModule,
    SharedModule,
    HttpClientModule,
  ]
})
export class UsersModule { }
