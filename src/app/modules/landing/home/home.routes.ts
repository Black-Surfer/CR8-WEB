import { Routes } from '@angular/router';
import { LandingHomeComponent } from './home.component';
import { ProductSearchComponent } from '../product-search/product-search.component';

export default [
  {
    path: '',
    component: LandingHomeComponent,
  },
  {
    path: 'search',
    component: ProductSearchComponent,
  },
] as Routes;
