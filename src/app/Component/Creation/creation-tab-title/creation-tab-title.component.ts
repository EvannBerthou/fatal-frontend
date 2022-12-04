import {Component, Input, OnInit} from '@angular/core';

enum step {
  QUESTIONS="questions",
  PARAMETRES="parametres",
  EDITION="edition",
}

@Component({
  selector: 'app-creation-tab-title',
  templateUrl: './creation-tab-title.component.html',
  styleUrls: ['./creation-tab-title.component.scss']
})
export class CreationTabTitleComponent implements OnInit {
  @Input() title : string = '';
  @Input() running : step = <step>localStorage.getItem("running");
  constructor() { }

  ngOnInit(): void {
  }

}
