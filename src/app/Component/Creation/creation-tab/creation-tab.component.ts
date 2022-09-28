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

  step: string = this.route.snapshot.params['step'];

  constructor(private router: Router, private route: ActivatedRoute) {
    if (this.step !== 'questions' && this.step !== 'parametres' && this.step !== 'edition') {
      //TODO: Rediriger vers /creation/:id/questions au lieu de juste forcer le changement
      this.step = 'questions';
    }
  }

  ngOnInit(): void {
    if (!localStorage.getItem("selector")) {
      this.onQuestions();
    }
    else {
      if (localStorage.getItem("selector") === "PARAMETRES")
        this.onParametres();
      else if (localStorage.getItem("selector") === "EDITION")
        this.onEdition();
    }
  }
  onQuestions() {
    this.showQuestions = true;
    this.progress = 33.3;
    localStorage.setItem("selector", "QUESTIONS");
    this.selector = <string>localStorage.getItem("selector");
    //this.router.navigate(['creation/' + this.title + '/questions']);
  }

  onParametres() {
    this.showQuestions = false;
    this.progress = 66.6;
    localStorage.setItem("selector", "PARAMETRES");
    this.selector = <string>localStorage.getItem("selector");
    //this.router.navigate(['creation/' + this.title + '/parametres']);
  }

  onEdition() {
    this.showQuestions = false;
    this.progress = 100;
    localStorage.setItem("selector", "EDITION");
    this.selector = <string>localStorage.getItem("selector");
    //this.router.navigate(['creation/' + this.title + '/edition']);
  }
}
