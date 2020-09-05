import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DepartmentsService, Department } from 'src/app/svc/departments.service';

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.css']
})
export class TaskCreateComponent implements OnInit {

  public imagePath;
  createTask: FormGroup;
  departments: Department[];


  imgURL: any;
  constructor(private formBuilder: FormBuilder, private departmentsSvc: DepartmentsService) {
    this.departments = [];
  }

  ngOnInit(): void {
    this.createTask = this.formBuilder.group({
      title: [''],
      department: [''],
      description: [''],
      priority: ['low'],
    });

    this.departmentsSvc.list().subscribe(data => {
      console.log(data);
      this.departments = data;
    })
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
    console.log(this.createTask.get("title").value);
  }

}
