import { Component, Input } from '@angular/core';
import { interval } from 'rxjs';
import { QCM } from '../../../models/QCM';
import { QcmService } from '../../../services/qcm.service';

@Component({
  selector: 'app-creation-tab-title',
  templateUrl: './creation-tab-title.component.html',
  styleUrls: ['./creation-tab-title.component.scss']
})
export class CreationTabTitleComponent {
  @Input() title: string = '';
  @Input() activated = false;
  saving = false;
  @Input() qcm?: QCM;

  // Pour sauvegarder automatiquement le QCM à un interval régulier
  subscription = interval(5000).subscribe(_ => this.saveQCM());

  constructor(private qcmService: QcmService) {}

  saveQCM() {
    if(this.saving || !this.qcm) return;

    this.saving = true;
    this.qcmService.saveQCM(this.qcm).subscribe(qcm => {
      this.qcm = qcm;
      this.saving = false;
    })
  }
}
