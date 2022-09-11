import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { tap } from "rxjs/operators";
import { Utilisateur } from "../Modeles/Utilisateur";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  user: Utilisateur | undefined = undefined;

  constructor(private http: HttpClient) {
    const user = sessionStorage.getItem('user');
    this.user = user ? JSON.parse(user) as Utilisateur : undefined;
  }


  authenticationService(username: string, password: string): any {
    return this.http.post<any>('/api/auth/sign_in', { email: username, password }, { observe: 'response' })
      .pipe(
        tap((response: any) => {
          this.user = response.body.data;
          sessionStorage.setItem('user', JSON.stringify(this.user))
        })
      )
  }

  logout(): void {
    sessionStorage.removeItem('user');
  }

  isUserLoggedIn(): boolean {
    return this.user !== undefined;
  }

  getLoggedInUserName(): string {
    return this.user?.username || '';
  }

  getName() {
    if (this.user === undefined) return '';
    return `${this.user.username?.toUpperCase()} ${this.user.prenom}`
  }

  //TODO: Ne devrait pas être un string
  getId(): string {
    return this.user?.id.toString() || "0";
  }

  getAdmin(): boolean {
    return this.user?.admin || false;
  }
}
