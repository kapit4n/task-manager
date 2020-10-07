import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, RouteReuseStrategy } from '@angular/router';
import { first } from 'rxjs/operators';
import { Department, Task, User } from 'src/app/shared/_models';
import { DepartmentsService } from 'src/app/shared/_services/';
import { TasksService } from 'src/app/shared/_services/tasks.service';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { UsersService } from 'src/app/shared/_services/users.service';

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.css']
})
export class TaskCreateComponent implements OnInit {
  public imagePath;
  createTask: FormGroup;
  departments: Department[] = [];
  users: User[] = [];
  imgURL: any;

  constructor(private formBuilder: FormBuilder,
    private departmentService: DepartmentsService,
    private taskService: TasksService,
    private usersService: UsersService) {

  }

  ngOnInit(): void {
    this.loadDepartment();
    this.loadUsers();
    this.createTask = this.formBuilder.group({
      title: [''],
      department: [''],
      assigned_to: [''],
      description: [''],
      priority: ['low'],
    });
  }

  loadDepartment() {
    this.departmentService.list().pipe(first()).subscribe(departments => {
      this.departments = departments;
    });
  }

  loadUsers() {
    this.usersService.list().pipe(first()).subscribe(users => {
      this.users = users;
    });
  }

  imgInputChange(files) {
    if (files.length === 0) return;

    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }

    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    }
  }

  save() {
    const taskInfo: Task = {
      title: this.createTask.get("title").value,
      description: this.createTask.get("description").value,
      department: this.createTask.get("department").value,
      assigned_to: this.createTask.get("assigned_to").value,
      state: 'new',
      priority: this.createTask.get("priority")?.value,
    }
    this.taskService.create(taskInfo).subscribe(d => {
      console.log(d);
    });
  }

}
