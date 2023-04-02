import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { User } from 'src/app/core/models/USER';
import { Classe } from '../models/classe';
import { Groupe } from '../models/groupe';

@Injectable({
  providedIn: 'root'
})
export class GroupeService {

  constructor(private httpClient: HttpClient) { }

  getGroupes(classe: Classe) {
    return this.httpClient.get<Groupe[]>(`/groupes/${classe.id}`);
  }

  ownGroupe(groupe: Groupe) {
    return this.httpClient.put<Groupe>(`/groupe/${groupe.id}`,groupe);
  }

  getGroupesFromUser(id1: number, id: number) {
    return this.httpClient.get<Groupe[]>(`/groupes/${id1}/${id}`);
  }

  getAllGroupesOwnedByUser(id1: number) {
    return this.httpClient.get<Groupe[]>(`/groupes/${id1}/user`,);
  }

  deleteFromProfesseurs(user: User, groupe: Groupe) {
    return this.httpClient.delete<Boolean>(`/groupe/${user.id}/${groupe.id}`)
  }
}
