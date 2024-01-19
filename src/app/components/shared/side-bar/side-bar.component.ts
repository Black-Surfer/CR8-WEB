import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/core/services/userService.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {

  constructor(private userService: UserService,private toasterService: ToastrService, private router: Router){}

  logOut(){
    this.userService.logOut().subscribe((res) => {
      this.toasterService.success('logged out successfully');
      this.router.navigateByUrl('/');
    });
  }
}
