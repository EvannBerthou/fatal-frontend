import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './components/topbar/topbar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptorService } from './interceptors/httpinterceptor.service';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    TopbarComponent,
  ],
  exports: [
    TopbarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true }
  ]
})
export class CoreModule { }
