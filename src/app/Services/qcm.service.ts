import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { QCM } from "../Modeles/QCM";
import { NotificationService } from "./notification.service";

@Injectable({
  providedIn: 'root'
})
export class QcmService {
  private backUrl = 'http://back.depta.krapo.pro/preferences';
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
    return this.errorable(this.http.get<QCM[]>('http://back.fatal.krapo.pro/qcms'), 'Erreur lors de la reception des QCMs');
  }

  generateNewQCM(QCM: QCM, classe: any, groupe: any): any {
    return this.errorable(this.http.get(`/qcms/${QCM.id}/generate`), 'Erreur lors de la création du QCM dans la base de donnée')
  }

  getQCMFromId(id: number): Observable<QCM> {
    return this.errorable(this.http.get<QCM>(`/qcm/${id}`, this.httpOptions), 'Ne parviens pas à récupérer le QCM');
  }

  modifyQCM(QCM: QCM): Observable<QCM> {
    /*
    QCM.categories.forEach(categorie => {
      categorie.questions.forEach(question => {
        question.reponses.forEach(reponse => {
          delete reponse.id
        })
      })
    })
    */
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
  // @ts-ignore
  //generateApplication(): Observable<any>

  getPDFFromIdAndId(idcreateur: string | undefined, id: number | undefined) {
    return fetch(`http://back.depta.krapo.pro/pdf/${idcreateur}/${id}`)
      .then(r =>
        r.blob()
      ).then(r => {
        const file = new Blob([r], { type: 'application/pdf' });
        return file;
      })
  }

  private errorable(http: any, errorMessage: string) {
    return http.pipe(catchError(this.handleError<number>(errorMessage)));
  }
}
