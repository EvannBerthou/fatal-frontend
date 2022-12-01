import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError, map, retry, tap } from "rxjs/operators";
import { QCM } from "../Modeles/QCM";
import { NotificationService } from "./notification.service";

@Injectable({
  providedIn: 'root'
})
export class QcmService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient, private notificationService: NotificationService) { }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      this.notificationService.errorMessage(operation);
      console.error(error);
      return of(result as T);
    };
  }

  //TODO (pas sûr): Ne récup que les infos du QCM sans les catégories etc, pour avoir un objet plus léger
  getQCMFromUser() {
    return this.errorable(this.http.get<QCM[]>('/qcms'), 'Erreur lors de la reception des QCMs');
  }

  generateNewQCM(QCM: QCM, classe: any, groupe: any): any {
    return this.errorable(this.http.get(`/qcms/${QCM.id}/generate`), 'Erreur lors de la création du QCM dans la base de donnée')
  }

  getQCMFromId(id: number): Observable<QCM> {
    return this.errorable(this.http.get<QCM>(`/qcms/${id}`, this.httpOptions), 'Ne parviens pas à récupérer le QCM');
  }

  modifyQCM(QCM: QCM): Observable<QCM> {
    return this.errorable(this.http.put<QCM>(`/qcm`, QCM, this.httpOptions), 'Ne parviens pas à modifier le QCM');
  }

  createNewQCM(QCM: QCM): Observable<number> {
    //delete QCM.id;
    return this.http.post<number>(`/qcm`, QCM, this.httpOptions)
  }

  deleteQCM(QCM: QCM): Observable<QCM> {
    return this.errorable(this.http.delete<QCM>(
      `/qcm/${QCM.id}`,
      { headers: new HttpHeaders({ 'Content-Type': 'application/json' }), body: QCM }),
      "La suppression du QCM n'a pas aboutie"
    );
  }

  getPDFFromId(QCM: QCM): any{
    return this.http.get(
      `/PDF/${QCM.id}`,
      {headers: new HttpHeaders(
        { 'Content-Type': 'application/pdf' },
        ),responseType: 'blob'})
  }

  getRecentQCMs(): Observable<QCM[]> {
    return this.errorable(this.http.get<QCM[]>('/qcms/recent'), 'Erreur lors de la reception des QCMs recents');
  }

  private errorable(http: any, errorMessage: string): Observable<any> {
    return http.pipe(catchError(this.handleError<number>(errorMessage)));
  }
}
