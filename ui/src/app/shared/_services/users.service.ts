import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../_models';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  baseUrl = 'http://localhost:8000'
  constructor(private http: HttpClient, private router: Router) { }

  public me() {
    return this.http.get(`${this.baseUrl}/api/me`)
  }

  public setMe(userInfo: User) {
    localStorage.setItem('me', JSON.stringify(userInfo))
  }

  public getMe() {
    if (localStorage.getItem('me')) {
      this.me().subscribe(me => {
        console.log(me);
      }, error => {
        console.log(error);
        this.router.navigate(['login']);
      })
      return JSON.parse(localStorage.getItem('me'));
    } else {
      this.router.navigate(['login']);
      return null;
    }
  }

}
