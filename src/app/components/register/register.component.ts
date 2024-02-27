import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserRegisterFormModel } from 'src/app/core/models/Request/UserRegisterFormModel';
import { UserService } from 'src/app/core/services/userService.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  passwordControlName: string= 'password';

  constructor(private fb: FormBuilder,private toastr: ToastrService, private userService: UserService, private router: Router) { }
  registerForm = this.fb.group({
    firstName: [
      '',
      Validators.compose([Validators.required, Validators.minLength(3)]),
    ],
    lastName: [
      '',
      Validators.compose([Validators.required, Validators.minLength(3)]),
    ],
    phoneNumber: [
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

  get firstName(){
    return this.registerForm.get('fullName');
  }

  get lastName(){
    return this.registerForm.get('lastName');
  }

  get phoneNumber(){
    return this.registerForm.get('phoneNumber');
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
    const { firstName, lastName, phoneNumber, emailAddress, password, confirmPassword} = this.registerForm.value;
    var payload: UserRegisterFormModel = {
      firstname: firstName ?? '',
      lastname: lastName ?? '',
      phonenumber: phoneNumber ?? '',
      email: emailAddress ?? '',
      password: password ?? '',
      confirmPassword: confirmPassword ?? '',

    }
    this.userService.registerUser(payload).subscribe(
      (res) => {
        this.toastr.success('User created;');
        this.router.navigateByUrl('/login');
      }
      ,
      (err) => this.toastr.error(err.error)
    )
  }
}
