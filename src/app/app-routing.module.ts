import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './core/guards/AuthGuard';
import { HomeComponent } from './components/home/home.component';
import { OptionsComponent } from './admin/options/options.component';
import { OptionCreateComponent } from './admin/options/option-create/option-create.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CreateOrderComponent } from './components/home/create-order/create-order.component';
import { ProductDetailsComponent } from './components/home/create-order/product-details/product-details.component';


const routes: Routes = [
  {path: '', redirectTo:'/home', pathMatch:'full'},
  { path: 'login', component: LoginComponent, title: 'PAC8 | Login' },
  { path: 'register', component: RegisterComponent , title: 'PAC8 | Register' },
  { path: 'home', component: HomeComponent , title: 'PAC8 | Home' },
  { path: 'create-order', component: CreateOrderComponent , title: 'PAC8 | Create Order' },
  {path: 'product-details/:id', component: ProductDetailsComponent, title: 'PAC8 | Product Details'},
  //move to admin
  //{ path: 'options', component: OptionsComponent , title: 'PAC8 | Options' },
  {
    path: 'admin',
    canActivate: [AuthGuard],
    loadChildren: () => import('./admin/admin.module').then(ad => ad.AdminModule)
  },
  {
    path: 'my',
    canActivate: [AuthGuard],
    loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule)
  },
  {
    path: '**', pathMatch: 'full',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
