import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { QCM } from 'src/app/Modeles/QCM';


enum step {
  QUESTIONS="questions",
  PARAMETRES="parametres",
  EDITION="edition",
}

@Component({
  selector: 'app-creation-tab',
  templateUrl: './creation-tab.component.html',
  styleUrls: ['./creation-tab.component.scss']
})
export class CreationTabComponent implements OnInit {

  step = step;
  @Input() qcm!: QCM;

  selector: step = step.QUESTIONS;
  showQuestions = false;

  running: step = step.QUESTIONS;

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

  setStep(step: step) {
    this.running = step;
    this.router.navigate([`creation/${this.qcm.id}/${this.running}`]);
  }

  onQuestions() {
    this.setStep(step.QUESTIONS);
  }

  onParametres() {
    this.setStep(step.PARAMETRES);
  }

  onEdition() {
    this.setStep(step.EDITION);
  }
}
