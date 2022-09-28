import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { QCM } from 'src/app/Modeles/QCM';

@Component({
  selector: 'app-creation-tab',
  templateUrl: './creation-tab.component.html',
  styleUrls: ['./creation-tab.component.scss']
})
export class CreationTabComponent implements OnInit {
  @Input() qcm!: QCM;

  progress: number = 33.3;
  selector: string = 'QUESTIONS';
  showQuestions = false;

  step: string = 'questions';

  private progessByTab: any = {
    'questions': 33.3,
    'parametres': 66.6,
    'edition': 100
  }

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.setStep(this.route.snapshot.params['step']);
  }

  setStep(step: string) {
    this.step = step;
    if (!Object.keys(this.progessByTab).includes(this.step)) {
      this.step = 'questions';
    }

    this.router.navigate([`creation/${this.qcm.id}/${this.step}`]);
    this.progress = this.progessByTab[this.step];
  }

  onQuestions() {
    this.setStep('questions');
  }

  onParametres() {
    this.setStep('parametres');
  }

  onEdition() {
    this.setStep('edition');
  }
}
