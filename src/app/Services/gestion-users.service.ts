import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient, HttpParams} from "@angular/common/http";
import {map} from "rxjs/operators";
import {User} from "../Modeles/USER";

@Injectable({
  providedIn: 'root'
})
export class GestionUsersService {
  private router: Router;

  constructor(router: Router, private http: HttpClient) {this.router=router }

  newUser(){
    this.router.navigate(["/users/new"])
  }
  editUser(){
    this.router.navigate(["/users/edit"])
  }
  removeUser(){
    this.router.navigate(["/users/remove"])
  }
  resetUser(){
    this.router.navigate(["/users/reset"])
  }

  createUser(username: string, email: string,name: string, surname:string,password:string) {
    let user = new User(username,email,name,surname,password,false,[])

    return this.http.post("http://localhost:8080/user",JSON.stringify(user)).pipe(map((res)=>{
      return res
    }))
  }
}
