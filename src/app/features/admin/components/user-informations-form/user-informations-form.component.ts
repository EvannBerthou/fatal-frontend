import { Component } from '@angular/core';

@Component({
  selector: 'app-user-informations-form',
  templateUrl: './user-informations-form.component.html',
  styleUrls: ['./user-informations-form.component.scss']
})
export class UserInformationsFormComponent {
  //TODO: Temporaire
  name = "NOM";
  surname = "PRENOM";
  email = "EMAIL";
  username = "USERNAME";
}
