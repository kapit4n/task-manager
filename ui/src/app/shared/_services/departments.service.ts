import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Department} from 'src/app/shared/_models';

@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {

  baseUrl = "http://localhost:8000/api";

  constructor(private http: HttpClient) {

  }

  public list() {
    return this.http.get<Department[]>(`${this.baseUrl}/departments`);
  }
}
