import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppListComponent } from './components/app-list/app-list.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, AppListComponent],
  exports: [AppListComponent],
})
export class SharedModule {}
