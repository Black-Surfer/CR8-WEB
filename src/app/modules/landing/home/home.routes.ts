import { Routes } from '@angular/router';
import { LandingHomeComponent } from './home.component';
import { ProductSearchComponent } from '../product/product-search/product-search.component';
import { ProductDetailComponent } from '../product/product-detail/product-detail.component';
import { CartComponent } from 'app/modules/cart/cart/cart.component';
import { ProductEditComponent } from '../product/product-edit/product-edit.component';

export default [
  {
    path: '',
    component: LandingHomeComponent,
  },
  {
    path: ' home',
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
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'product-edit',
    component: ProductEditComponent,
  },
] as Routes;
