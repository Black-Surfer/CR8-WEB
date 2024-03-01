
import { Component } from '@angular/core';
import { Observable, map, shareReplay } from 'rxjs';
import { UserService } from 'src/app/core/services/userService.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isLoggedIn: boolean;

  constructor(private userService: UserService){
    this.isLoggedIn = this.userService.checkLoggedInUser();
  }

}
