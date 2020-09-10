import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  baseUrl = 'http://localhost:8000'
  constructor(private http: HttpClient) { }

  public me() {
    return this.http.get(`${this.baseUrl}/api/me`)
  }

}
