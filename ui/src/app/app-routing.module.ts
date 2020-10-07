import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskCreateComponent } from './comp/tasks/task-create/task-create.component';
import { TaskViewComponent } from './comp/tasks/task-view/task-view.component';
import { TaskListComponent } from './comp/tasks/task-list/task-list.component';
import { LoginComponent } from './comp/auth/login/login.component';

const routes: Routes = [
  {
    path: '', component: TaskListComponent
  },
  {
    path: 'home', component: TaskListComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'tasks/create', component: TaskCreateComponent
  },
  {
    path: 'tasks/:id', component: TaskViewComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
