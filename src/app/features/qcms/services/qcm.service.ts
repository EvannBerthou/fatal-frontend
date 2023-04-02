import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";
import { NotificationService } from '../../users/services/notification.service';
import { QCM } from '../models/QCM';

@Injectable({
  providedIn: 'root'
})
export class QcmService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient, private notificationService: NotificationService) { }

  //TODO (pas sûr): Ne récup que les infos du QCM sans les catégories etc, pour avoir un objet plus léger
  getQCMFromUser() {
    return this.errorable(this.http.get<QCM[]>('/qcms'), 'Erreur lors de la reception des QCMs');
  }

  generateNewQCM(QCM: QCM): any {
    return this.errorable(this.http.get(`/qcms/${QCM.id}/generate`), 'Erreur lors de la création du QCM dans la base de donnée')
  }

  getQCMFromId(id: number): Observable<QCM> {
    return this.errorable(this.http.get<QCM>(`/qcms/${id}`, this.httpOptions), 'Ne parviens pas à récupérer le QCM');
  }

  saveQCM(qcm: QCM): Observable<QCM> {
    // Si le QCM à déjà un ID, alors il faut update le QCM (PUT), sinon il faut créer un nouveau QCM (POST)
    if (qcm.id) {
      return this.errorable(this.http.put<QCM>(`/qcms/${qcm.id}`, {qcm}, this.httpOptions), 'Ne parviens pas à modifier le QCM');
    }
    return this.errorable(this.http.post<QCM>(`/qcms`, {qcm}, this.httpOptions), 'Ne parviens pas à crééer le QCM');
  }

  createNewQCM(titre: string): Observable<QCM> {
    return this.http.post<QCM>(`/qcms`, { titre }, this.httpOptions)
  }

  deleteQCM(QCM: QCM): Observable<QCM> {
    return this.errorable(this.http.delete<QCM>(
      `/qcm/${QCM.id}`,
      { headers: new HttpHeaders({ 'Content-Type': 'application/json' }), body: QCM }),
      "La suppression du QCM n'a pas aboutie"
    );
  }

  getPDFFromId(QCM: QCM): any {
    return this.http.get(
      `/PDF/${QCM.id}`,
      {
        headers: new HttpHeaders(
          { 'Content-Type': 'application/pdf' },
        ), responseType: 'blob'
      })
  }

  getRecentQCMs(): Observable<QCM[]> {
    return this.errorable(this.http.get<QCM[]>('/qcms/recent'), 'Erreur lors de la reception des QCMs recents');
  }

  //TODO: Déplacer dans l'intercepteur la gestion d'erreur
  private errorable<T>(http: Observable<T>, errorMessage: string): Observable<T> {
    return http.pipe(catchError(this.handleError<T>(errorMessage)));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      this.notificationService.errorMessage(operation);
      console.error(error);
      return of(result as T);
    };
  }
}
