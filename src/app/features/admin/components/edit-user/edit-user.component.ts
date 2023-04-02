import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent {
  findUser() {
    //TODO: Récupérer les informations d'un utilisateur.
  }

  deleteUser() {
    //TODO: Envoyer une demande de suppresion de l'utilisateur au back.
  }

  updateUser() {
    //TODO: Mettre à jour les informations de l'utilisateur dans le back.
  }

  resetPassword() {
    //TODO: Envoyer une demande de Reset de mot de passe au back.
  }
}
