import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task';
import { TasksService } from 'src/app/svc/tasks.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks: Task[];

  constructor(private tasksSvc: TasksService) {

  }

  ngOnInit(): void {
    this.tasksSvc.list().subscribe(tasks => {
      this.tasks = tasks;
    });
  }
}
