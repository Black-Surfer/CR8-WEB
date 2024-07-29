import { NgModule } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { AppListComponent } from './components/app-list/app-list.component';
import { AppSearchComponent } from './components/app-search/app-search.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, AppListComponent, AppSearchComponent, NgIf],
  exports: [AppListComponent, AppSearchComponent, NgIf],
})
export class SharedModule {}
