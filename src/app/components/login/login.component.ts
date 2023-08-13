import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserLoginFormModel } from 'src/app/core/models/Request/UserLoginFormModel';
import { UserService } from 'src/app/core/services/userService.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private fb: FormBuilder, private userService: UserService){

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
      (res) => console.log('User sucessfully logged in !!', res),
      (err) => console.error(err)
    )
  }


  }
