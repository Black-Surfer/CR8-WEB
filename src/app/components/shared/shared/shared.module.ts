import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HeaderComponent
  ]
})
export class SharedModule { }
