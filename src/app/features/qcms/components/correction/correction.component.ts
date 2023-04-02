import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from "@angular/common/http";
import { QcmService } from '../../services/qcm.service';
import { QCM } from '../../models/QCM';

@Component({
  selector: 'app-correction',
  templateUrl: './correction.component.html',
  styleUrls: ['./correction.component.scss']
})
export class CorrectionComponent implements OnInit {
  public uploaded: Object = false;
  public worked = false;

  constructor(private router: Router, private qcmService: QcmService, private httpClient: HttpClient) { }

  files: File[] = [];
  showOnlyPDFAcceptedError = false;
  qcm?: QCM;
  qcmId!: number;

  ngOnInit(): void {
    const urlParts = this.router.url.split("/");
    const id = Number.parseInt(urlParts[urlParts.length - 1]);
    if (Number.isNaN(id)) {
      this.router.navigate(['mesqcm']);
    }
    else {
      this.qcmId = id;
      this.qcmService.getQCMFromId(this.qcmId)
        .subscribe(qcm => {
          this.qcm = qcm as QCM;
          if (this.qcm == undefined) {
            this.router.navigate(['mesqcm']);
          }
        });
    }

  }

  fileBrowseHandler(e: Event) {
    const element = e.currentTarget as HTMLInputElement;
    let fileList: FileList | null = element.files;
    if (fileList) {
      this.onFileDropped(fileList);
    }
  }

  onFileDropped(files: any) {
    this.showOnlyPDFAcceptedError = false;
    for (let i = 0; i < files.length; i++) {
      let file: File | null = files.item(i);
      if (file) {
        if (file?.type == "application/pdf") {
          this.files.push(file);
        }
        else {
          this.showOnlyPDFAcceptedError = true;
        }
      }
    }
  }

  onDeleteFile(index: number) {
    this.files.splice(index, 1);
  }

  onCorriger() {
    let formData: any = new FormData();
    this.files.forEach(file => {
      formData.append('files', file)
    })
    this.httpClient.post(`/qcm/${this.qcmId}/uploadcopies`, formData).subscribe(r => {
      this.worked = true;
      this.uploaded = r;
      this.httpClient.post(`/qcm/${this.qcmId}/note`, '').subscribe(res => {
        console.log(res);
      })
    })
  }

}
