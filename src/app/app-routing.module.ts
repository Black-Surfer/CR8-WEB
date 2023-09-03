import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './core/guards/AuthGuard';


const routes: Routes = [
  {path: '', redirectTo:'/login', pathMatch:'full'},
  { path: 'login', component: LoginComponent, title: 'PAC8 | Login' },
  { path: 'register', component: RegisterComponent , title: 'PAC8 | Register' },
  {
    path: 'admin',
    canActivate: [AuthGuard],
    loadChildren: () => import('./admin/admin.module').then(ad => ad.AdminModule)
  },
  {
    path: 'my',
    canActivate: [AuthGuard],
    loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
