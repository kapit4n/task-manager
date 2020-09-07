import { Injectable } from '@angular/core';

import { Task } from 'src/app/models/task';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  baseURL = "http://localhost:8000/api/tasks/";
  constructor(private http: HttpClient) { }

  create(taskInfo: Task) {
    return this.http.post(this.baseURL, taskInfo)
  }

  list() {
    return this.http.get<Task[]>(`${this.baseURL}/tasks`);
  }
}
