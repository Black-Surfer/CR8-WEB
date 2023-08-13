import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { UserRegisterFormModel } from 'src/app/core/models/Request/UserRegisterFormModel';
import { UserService } from 'src/app/core/services/userService.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  passwordControlName: string= 'password';

  constructor(private fb: FormBuilder, private userService: UserService) { }
  registerForm = this.fb.group({
    fullName: [
      '',
      Validators.compose([Validators.required, Validators.minLength(3)]),
    ],
    emailAddress: [
      '',
      Validators.compose([Validators.required, Validators.email]),
    ],
    password: [
      '',
      Validators.compose([Validators.required, Validators.minLength(3)]),
    ],
    confirmPassword: [
      '',
      Validators.compose([Validators.required, Validators.minLength(3)]),
    ],
    file: [null],
  });

  ngOnInit(): void { }

  get fullName(){
    return this.registerForm.get('fullName');
  }

  get emailAddress(){
    return this.registerForm.get('emailAddress');
  }

  get password(){
    return this.registerForm.get('emailAddress');
  }

  get confirmPassword(){
    return this.registerForm.get('confirmPassword');
  }

  submitRegisterForm(){
    const { fullName, emailAddress, password, confirmPassword} = this.registerForm.value;
    var payload: UserRegisterFormModel = {
      fullname: fullName ?? '',
      email: emailAddress ?? '',
      password: password ?? '',
      confirmPassword: confirmPassword ?? '',

    }
    this.userService.registerUser(payload).subscribe(
      (res) => console.log('User created =>',payload),
      (err) => console.error(err)
    )
  }
}
