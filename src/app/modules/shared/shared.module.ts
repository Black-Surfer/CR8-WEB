import { NgModule } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { AppListComponent } from './components/app-list/app-list.component';
import { AppSearchComponent } from './components/app-search/app-search.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AppListComponent,
    AppSearchComponent,
    RouterModule,
    NgIf,
    NgFor,
  ],
  exports: [AppListComponent, AppSearchComponent, NgIf, NgFor],
})
export class SharedModule {}
