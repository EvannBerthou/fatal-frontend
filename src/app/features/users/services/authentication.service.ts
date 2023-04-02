import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { tap } from "rxjs/operators";
import { User } from "src/app/core/models/USER";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  user: User | undefined = undefined;

  constructor(private http: HttpClient) {
    const user = sessionStorage.getItem('user');
    this.user = user ? JSON.parse(user) as User : undefined;
  }

  authenticationService(username: string, password: string): any {
    return this.http.post<any>('/auth/sign_in', { email: username, password }, { observe: 'response' })
      .pipe(
        tap((response: any) => {
          this.user = response.body.data;
          sessionStorage.setItem('user', JSON.stringify(this.user))
          sessionStorage.setItem('token', response.headers.get('Authorization'));
        })
      )
  }

  logout(): void {
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('token');
  }

  isUserLoggedIn(): boolean {
    return this.user !== undefined;
  }

  getUser(): User | undefined {
    return this.user;
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
