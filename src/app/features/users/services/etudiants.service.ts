import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Etudiant } from '../models/etudiant';

@Injectable({
  providedIn: 'root'
})
export class EtudiantsService {
  constructor(private http: HttpClient) { }

  getEtudiantFromUser(id: number) {
    return this.http.get<Etudiant[]>(`/etudiants/byUser/${id}`);
  }

  createEtudiant(param: { noetudiant: any; classe: any; groupe: any; nom: any; prenom: any }) {
    return this.http.post<Etudiant>('/etudiant', param);
  }

  editEtudiant(etudiant: Etudiant) {
    return this.http.put<Etudiant>('/etudiant', etudiant);
  }
}
