import { Component, Input } from '@angular/core';
import { QCM } from 'src/app/Modeles/QCM';

@Component({
  selector: 'app-recents',
  templateUrl: './recents.component.html',
  styleUrls: ['./recents.component.scss']
})
export class RecentsComponent {
  @Input() qcm!: QCM
}
