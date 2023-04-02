import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { QCM } from '../../../models/QCM';


export enum Step {
  Questions = "questions",
  Paramatres = "parametres",
  Edition = "edition",
};

@Component({
  selector: 'app-creation-tab',
  templateUrl: './creation-tab.component.html',
  styleUrls: ['./creation-tab.component.scss']
})
export class CreationTabComponent implements OnInit {
  //Note: Pour pouvoir utiliser l'enum dans le HTML
  Step = Step;
  @Input() qcm!: QCM;
  selector = Step.Questions;

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.setStep(this.route.snapshot.params['step'] ?? this.selector);
  }

  setStep(step: Step) {
    this.selector = step;
    this.router.navigate(['/creation/', this.qcm.id, this.selector]);
  }

  onQuestions() {
    this.setStep(Step.Questions);
  }

  onParametres() {
    this.setStep(Step.Paramatres);
  }

  onEdition() {
    this.setStep(Step.Edition);
  }
}
