import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User } from 'src/app/core/models/USER';

@Injectable({
  providedIn: 'root'
})
export class GestionUsersService {
  constructor(private http: HttpClient) { }

  createUser(username: string, email: string, prenom: string, nom: string) {
    const user = { id: 0, username, email, prenom, nom, admin: false } as User;
    return this.http.post("/user", user);
  }

  resetPassword(user: User) {
    return this.http.put(`/user/resetpassword`, user);
  }

  removeUserFromIdOrUsername(id: number) {
    return this.http.delete<number>(`/user/${id}`);
  }

  getIdFromId(id: any) {
    return this.http.get<User>(`/user/${id}`);
  }

  getUserFromId(id: number) {
    return this.http.get<User>(`/user/${id}`);
  }
}
