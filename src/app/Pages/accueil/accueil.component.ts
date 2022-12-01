import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { QCM } from 'src/app/Modeles/QCM';
import { QcmService } from 'src/app/Services/qcm.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent {
  qcms$: Observable<QCM[]> = this.qcmService.getRecentQCMs();

  constructor(private qcmService: QcmService) { 
  }
}
