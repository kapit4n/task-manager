import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/_services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/shared/_services/users.service';
import { User } from 'src/app/shared/_models';

interface ITokenRes {
  access; string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private authSvc: AuthService,
    private formBuilder: FormBuilder,
    private router: Router, private userSvc: UsersService) {
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  onSubmit() {
    const credentials = this.loginForm.value;
    this.authSvc.login(credentials).subscribe((res: ITokenRes) => {
      localStorage.setItem('token', res.access);
      this.userSvc.me().subscribe((me: User) => {
        this.userSvc.setMe(me);
        this.router.navigate(['home']);
      })
    })
  }

  onCancel() {
  }

}
