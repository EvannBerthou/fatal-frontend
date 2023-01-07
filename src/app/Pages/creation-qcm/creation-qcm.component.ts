import { Component } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { QcmService } from "../../Services/qcm.service";
import { QCM } from "../../Modeles/QCM";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-creation-qcm',
  templateUrl: './creation-qcm.component.html',
  styleUrls: ['./creation-qcm.component.scss']
})
export class CreationQCMComponent {
  qcm$: Observable<QCM>;

  constructor(public route: ActivatedRoute, private qcmService: QcmService, public router: Router) {
    const id = this.route.snapshot.params['id'];
    this.qcm$ = this.qcmService.getQCMFromId(id)
  }
}
