import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {TokenService} from './token.service';
import {take, tap} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private usersUrl= "https://dev-0qcjeo2l2iabeljw.us.auth0.com/api/v2/users";
  constructor(private http:HttpClient) { }

  public getUsers(){
      return this.http.get(this.usersUrl)
  }

}
