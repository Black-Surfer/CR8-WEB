import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserLoginFormModel } from 'src/app/core/models/Request/UserLoginFormModel';
import { UserService } from 'src/app/core/services/userService.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router,private fb: FormBuilder, private userService: UserService, private toastr: ToastrService){

  }

  get email() {
    return this.loginForm.get('email');
  }

  get password(){
    return this.loginForm.get('password');
  }

  loginForm = this.fb.group({
    email: ['', Validators.compose([Validators.required, Validators.email])],
    password: ['', Validators.compose([Validators.required])]
  })

  loginUser(){
    const { email, password} = this.loginForm.value;
    let payload: UserLoginFormModel = {email: email ?? '', password: password ?? '', rememberMe: true}
    this.userService.loginUser(payload).subscribe(
      (res) => {
        this.toastr.success('welcome');
        this.router.navigateByUrl('/admin');
    },
      (err) => this.toastr.error(err.error)
    )
  }


  }
