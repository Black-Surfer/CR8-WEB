import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { SideBarComponent } from './side-bar/side-bar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeaderComponent,
    SideBarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    HeaderComponent,
    SideBarComponent
  ]
})
export class SharedModule { }
