import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CustomerDashboardComponent } from "./customer-dashboard/customer-dashboard.component";

const routes: Routes = [  
  { path: 'dashboard', component: CustomerDashboardComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }

export const routedComponents = [CustomerDashboardComponent];