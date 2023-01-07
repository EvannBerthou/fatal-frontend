import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import { QCM } from "../../../Modeles/QCM";
import { QcmService } from "../../../Services/qcm.service";

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
    this.getPDF();
  }

  generateQCM() {
    this.isGenerating = true;

    this.qcmService.generateNewQCM(this.qcm, undefined, undefined).subscribe(({ error }: {error: number}) => {
      this.isGenerate = error === 0;
      if (this.isGenerate) {
        this.getPDF();
      }
      this.isGenerating = false;
    });
  }

  private getPDF(): void {
    this.qcmService.getPDFFromId(this.qcm).subscribe((pdfBlob: Blob) => {
      if (pdfBlob.size > 0) {
        let url = window.URL.createObjectURL(pdfBlob);
        this.pdf = this.sanitizer.bypassSecurityTrustResourceUrl(url);
        this.isGenerate = true;
      }
    })
  }
}

