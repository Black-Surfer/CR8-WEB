import { Routes } from '@angular/router';
import { LandingHomeComponent } from './home.component';
import { ProductSearchComponent } from '../product-search/product-search.component';
import { ProductListComponent } from 'app/components/product-list/product-list.component';

export default [
  {
    path: '',
    component: LandingHomeComponent,
  },
  {
    path: 'search',
    component: ProductSearchComponent,
  },
  {
    path: 'products',
    component: ProductListComponent,
  },
] as Routes;
