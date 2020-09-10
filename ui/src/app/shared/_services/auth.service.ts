import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

interface ICredentials {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseURL = 'http://localhost:8000/'
  constructor(private http: HttpClient) {

  }

  login(credentials: ICredentials) {
    return this.http.post(`${this.baseURL}api/token/`, credentials);
  }
}
