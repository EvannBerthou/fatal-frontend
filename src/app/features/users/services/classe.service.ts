import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { User } from 'src/app/core/models/USER';
import { Classe } from '../models/classe';

@Injectable({
  providedIn: 'root'
})
export class ClasseService {

  constructor(private httpClient: HttpClient) { }

  getClasses() {
    return this.httpClient.get<Classe[]>("/classes");
  }

  getClassesFromUser(id:number) {
    return this.httpClient.get<Classe[]>(`/classes/${id}`);
  }

  ownClasse(classe: Classe) {
    return this.httpClient.put<Classe>(`/classe/${classe.id}`,classe);
  }

  deleteFromProfesseurs(user: User, classe: Classe) {
    return this.httpClient.delete<Boolean>(`/classe/${user.id}/${classe.id}`);
  }
}
