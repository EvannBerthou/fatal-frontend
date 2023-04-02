import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import { QCM } from '../../../models/QCM';
import { QcmService } from '../../../services/qcm.service';

@Component({
  selector: 'app-creation-editions',
  templateUrl: './creation-editions.component.html',
  styleUrls: ['./creation-editions.component.scss']
})
export class CreationEditionsComponent implements OnInit {
  @Input() qcm!: QCM;
  errormessage: string = "";

  constructor(public sanitizer: DomSanitizer, public qcmService: QcmService) {
  }

  pdf: SafeResourceUrl | null = null;
  isGenerate: boolean = false;
  isGenerating: boolean = false;

  ngOnInit(): void {
    this.downloadQCM();
  }

  generateQCM() {
    this.isGenerating = true;

    this.qcmService.generateNewQCM(this.qcm).subscribe(({ error }: {error: number}) => {
      this.isGenerate = error === 0;
      if (this.isGenerate) {
        this.downloadQCM();
      }
      this.isGenerating = false;
    });
  }

  downloadQCM(): void {
    this.qcmService.getPDFFromId(this.qcm).subscribe((pdfBlob: Blob) => {
      if (pdfBlob.size > 0) {
        let url = window.URL.createObjectURL(pdfBlob);
        this.pdf = this.sanitizer.bypassSecurityTrustResourceUrl(url);
        this.isGenerate = true;
      }
    })
  }
}

