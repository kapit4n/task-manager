import { Injectable } from '@angular/core';

import { Task } from 'src/app/shared/_models/task';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  constructor(private http: HttpClient) { }

  create(taskInfo: Task) {
    return this.http.post(`/tasks/`, taskInfo)
  }

  list() {
    return this.http.get<Task[]>(`/tasks/`);
  }
}
