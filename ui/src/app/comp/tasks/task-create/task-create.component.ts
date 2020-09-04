import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';



@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.css']
})
export class TaskCreateComponent implements OnInit {

  createTask: FormGroup;
  constructor(private formBuilder: FormBuilder) {

   }

  ngOnInit(): void {
    this.createTask=this.formBuilder.group({
      title: [''],
      department: [''],
      description: [''],
    })
  }

  imgInputChange(event) {

  }

}
