import {Component, Input, OnInit} from '@angular/core';
import { interval } from 'rxjs';
import { QCM } from 'src/app/Modeles/QCM';
import { QcmService } from 'src/app/Services/qcm.service';

@Component({
  selector: 'app-creation-title',
  templateUrl: './creation-title.component.html',
  styleUrls: ['./creation-title.component.scss']
})
export class CreationTitleComponent implements OnInit {
  @Input() title : string = '';
  @Input() selector : string = '';
  saving: boolean = false
  @Input() qcm! : QCM;


  source = interval(15000);
  subscription = this.source.subscribe(val => this.saveQCM());
  constructor(private qcmService: QcmService) { }

  ngOnInit(): void {
  }

  saveQCM(): void {
    if(!this.saving){
      this.saving = true;
      this.qcmService.saveQCM(this.qcm).subscribe(_ => {
        this.qcm =_;
        this.saving = false;
      });
    }
  }
}
