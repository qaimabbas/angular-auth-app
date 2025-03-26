import { Injectable } from '@angular/core';
import {map, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private authUrl = 'https://dev-0qcjeo2l2iabeljw.us.auth0.com/oauth/token';
  constructor(private http: HttpClient) {}

  public getToken() {

   return this.http.post<any>(this.authUrl, {
      client_id: 
      client_secret:
      audience: 'https://dev-0qcjeo2l2iabeljw.us.auth0.com/api/v2/',
      grant_type: 'client_credentials'
    }).pipe(
      map(response => response.access_token) // Extract the access token from the response
    );




  }
}
