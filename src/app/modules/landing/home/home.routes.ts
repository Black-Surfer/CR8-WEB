import { Routes } from '@angular/router';
import { LandingHomeComponent } from './home.component';
import { ProductSearchComponent } from '../product/product-search/product-search.component';
import { ProductDetailComponent } from '../product/product-detail/product-detail.component';

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
    path: 'product-detail/:id',
    component: ProductDetailComponent,
  },
] as Routes;
