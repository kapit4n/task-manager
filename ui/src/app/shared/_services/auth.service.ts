import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../_models';
import { Router } from '@angular/router';

interface ICredentials {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuthenticated = new BehaviorSubject<boolean>(false);
  baseURL = ''
  constructor(private http: HttpClient, private router: Router) {
    const authenticated = this.isLoggedIn;
    this.isAuthenticated.next(authenticated);
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('token'));
    return user !== null ? true : false;
  }

  checkAuthenticated() {
    const authenticated = this.isLoggedIn;
    this.isAuthenticated.next(authenticated);
    return authenticated;
  }


  signUp(user: ICredentials): Observable<User> {
    return this.http.post<User>(`${this.baseURL}users/`, user);
  }

  signOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.isAuthenticated.next(false);
    this.router.navigate(['/login']);
  }

  login(credentials: ICredentials) {
    return this.http.post(`${this.baseURL}/token/`, credentials);
  }

  setUserInfo(user: User) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  getToken() {
    return localStorage.getItem('token');
  }
}
