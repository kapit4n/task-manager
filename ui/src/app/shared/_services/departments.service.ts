import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Department} from 'src/app/shared/_models';

@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {
  constructor(private http: HttpClient) {

  }

  public list() {
    return this.http.get<Department[]>(`/departments`);
  }
}
