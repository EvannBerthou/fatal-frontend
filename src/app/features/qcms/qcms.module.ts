import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { InputDialogComponent } from './components/input-dialog/input-dialog.component';
import { CreationAddComponent } from './components/Creation/creation-add/creation-add.component';
import { CreationCardComponent } from './components/Creation/creation-card/creation-card.component';
import { CreationEditionsComponent } from './components/Creation/creation-editions/creation-editions.component';
import { CreationParametresComponent } from './components/Creation/creation-parametres/creation-parametres.component';
import { CreationQuestionComponent } from './components/Creation/creation-question/creation-question.component';
import { CreationQuestionsComponent } from './components/Creation/creation-questions/creation-questions.component';
import { CreationTabComponent } from './components/Creation/creation-tab/creation-tab.component';
import { CreationTabTitleComponent } from './components/Creation/creation-tab-title/creation-tab-title.component';
import { RecentsComponent } from './components/recents/recents.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { QCMRoutingModule } from './qcms-routing.module';
import { CreationQCMComponent } from './pages/creation-qcm/creation-qcm.component';
import { NotesComponent } from './components/notes/notes.component';
import { CorrectionComponent } from './components/correction/correction.component';
import { CreationQuestionDefautComponent } from './components/Creation/creation-question/creation-question-defaut/creation-question-defaut.component';
import { CreationQuestionOuverteComponent } from './components/Creation/creation-question/creation-question-ouverte/creation-question-ouverte.component';
import { CreationQuestionNumeriqueComponent } from './components/Creation/creation-question/creation-question-numerique/creation-question-numerique.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { TableauComponent } from './pages/tableau/tableau.component';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [
    TableauComponent,
    InputDialogComponent,
    CreationAddComponent,
    CreationCardComponent,
    CreationEditionsComponent,
    CreationParametresComponent,
    CreationQuestionComponent,
    CreationQuestionDefautComponent,
    CreationQuestionOuverteComponent,
    CreationQuestionNumeriqueComponent,
    CreationQuestionsComponent,
    CreationTabComponent,
    CreationTabTitleComponent,
    AccueilComponent,
    NotesComponent,
    RecentsComponent,
    CreationQCMComponent,
    CorrectionComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    QCMRoutingModule,
    MatCardModule,
    MatTableModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatCheckboxModule,
    MatFormFieldModule,
    SharedModule,
  ]
})
export class QcmsModule { }
