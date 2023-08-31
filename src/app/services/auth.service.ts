import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { POST_LOGIN, POST_LOGOUT } from '../constants';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl: string = 'https://wo-fifa.azurewebsites.net';
  response: any;

  headers = new HttpHeaders({
    'Access-Control-Allow-Origin': '*',
  });

  constructor(private http: HttpClient) {}

  login() {
    const url = `${this.baseUrl}${POST_LOGIN}`;
    return this.http.post(url, this.headers);
  }

  logout(): Observable<unknown> {
    const url = `${this.baseUrl}${POST_LOGOUT}`;
    return this.http.post(url, {});
  }
}
