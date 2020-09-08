import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/shared/_models/task';
import { TasksService } from 'src/app/shared/_services/';

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
