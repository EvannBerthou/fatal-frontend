import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {tap} from "rxjs/operators";
import {User} from "src/app/core/models/USER";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  user: User | undefined;

  constructor(private http: HttpClient) {
    const user = sessionStorage.getItem('user');
    if (user) {
      this.user = JSON.parse(user);
    }
  }

  authenticationService(username: string, password: string): any {
    return this.http.post<any>('/auth/sign_in', {email: username, password}, {observe: 'response'})
      .pipe(
        tap((response: any) => {
          this.user = response.body.data;
          sessionStorage.setItem('user', JSON.stringify(this.user))
          sessionStorage.setItem('token', response.headers.get('Authorization'));
        })
      )
  }

  changePassword(values: { current_password: string, password: string, password_confirmation: string }) {
    return this.http.put<any>('/auth/password', {...values});
  }

  logout(): void {
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('token');
  }

  getUser(): User | undefined {
    return this.user;
  }
}
