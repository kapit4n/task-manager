import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../_models';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  baseUrl = 'http://localhost:8000'
  constructor(private http: HttpClient) { }

  public me() {
    return this.http.get(`${this.baseUrl}/api/me`)
  }

  public setMe(userInfo: User) {
    localStorage.setItem('me', JSON.stringify(userInfo))
  }

  public getMe() {
    return JSON.parse(localStorage.getItem('me'));
  }

}
