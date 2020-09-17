import { Component } from '@angular/core';
import { UsersService } from './shared/_services/users.service';
import { User } from './shared/_models';
import { AuthService } from './shared/_services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task-manager';
  userInfo: User;
  constructor(public userSvc: UsersService, public authSvc: AuthService) {
    this.userSvc.me().subscribe((data: User) => {
      this.userInfo = data;
    }, err => console.log(err)
    );
  }

  logout = () => {
    this.authSvc.signOut();
  }

  get isAuthenticated(): boolean {
    return this.authSvc.checkAuthenticated();
  }
}
