import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports:[
    HeaderComponent
  ]
})
export class SharedModule { }
