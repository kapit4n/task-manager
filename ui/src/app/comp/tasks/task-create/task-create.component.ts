import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.css']
})
export class TaskCreateComponent implements OnInit {

  public imagePath;
  createTask: FormGroup;
  departments = ["department1", 'department2'];


  imgURL: any;
  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    this.createTask = this.formBuilder.group({
      title: [''],
      department: [''],
      description: [''],
      priority: ['low'],
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
