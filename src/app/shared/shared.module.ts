import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { SeparatorComponent } from './components/separator/separator.component';
import { BoutonComponent } from './components/bouton/bouton.component';


@NgModule({
  declarations: [
    SeparatorComponent,
    BoutonComponent
  ],
  exports: [
    SeparatorComponent,
    BoutonComponent
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatCardModule,
  ],
})
export class SharedModule { }
