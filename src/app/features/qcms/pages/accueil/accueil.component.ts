import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { QCM } from '../../models/QCM';
import { QcmService } from '../../services/qcm.service';

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
