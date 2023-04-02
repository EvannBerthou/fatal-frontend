import { Component } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { map } from 'rxjs/operators';
import { QCM } from '../../models/QCM';
import { QcmService } from '../../services/qcm.service';

@Component({
  selector: 'app-creation-qcm',
  templateUrl: './creation-qcm.component.html',
  styleUrls: ['./creation-qcm.component.scss']
})
export class CreationQCMComponent {
  qcm?: QCM;
  saving = false;

  constructor(private route: ActivatedRoute, private qcmService: QcmService, public router: Router) {
    const id = this.route.snapshot.params['id'];
    this.qcmService.getQCMFromId(id).subscribe((qcm: QCM) => this.qcm = qcm);
  }

  saveQCM(qcm: QCM) {
    if (this.saving) return;

    this.saving = true;
    this.qcmService.saveQCM(qcm).subscribe((qcm: QCM) => {
      this.saving = false;
      this.qcm = qcm;
    });
  }
}
