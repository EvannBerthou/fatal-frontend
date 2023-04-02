import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User } from 'src/app/core/models/USER';

@Injectable({
  providedIn: 'root'
})
export class EditUserService {
  constructor(private http: HttpClient) { }

  editUser(user: User) {
    return this.http.put('/user', JSON.stringify(user));
  }
}
