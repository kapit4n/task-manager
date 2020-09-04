import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TaskCreateComponent } from './comp/tasks/task-create/task-create.component';
import { TaskListComponent } from './comp/tasks/task-list/task-list.component';


const routes: Routes = [
  {
    path: '', component: AppComponent
  },
  {
    path: 'tasks', component: TaskListComponent
  },
  {
    path: 'tasks/create', component: TaskCreateComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
