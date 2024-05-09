import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { OptionsComponent } from "./options/options.component";
import { OptionCreateComponent } from "./options/option-create/option-create.component";
import { LoginComponent } from "../components/login/login.component";
import { OptionListComponent } from "./options/option-list/option-list.component";
import { OptionDetailsComponent } from "./options/option-details/option-details.component";
import { AdminReportComponent } from "./dashboard/admin-report/admin-report.component";
import { OrdersComponent } from "./dashboard/orders/orders.component";
import { InvoiceComponent } from "./dashboard/invoice/invoice.component";
import { MessagesComponent } from "./dashboard/messages/messages.component";

const routes: Routes = [
  {
    path: '', component: DashboardComponent,
    children: [
      {
        path: '', component: AdminReportComponent,
      },
      {
        path: 'options', component: OptionsComponent, children: [
          { path: '', redirectTo: 'list', pathMatch: 'full' },
              { path: 'list', component: OptionListComponent, title: 'PAC8 | Options'},
              { path: 'create', component: OptionCreateComponent, title: 'PAC8 | Options | Create'},
              { path: 'create/:id', component: OptionCreateComponent, title: 'PAC8 | Options | Edit '},
        ]
      },
      {
        path: 'orders', component: OrdersComponent,
      },
      {
        path: 'invoice', component: InvoiceComponent,
      },
      {
        path: 'messages', component: MessagesComponent,
      },
    ]
  },


  //  {
  //   path: 'options', component: OptionsComponent, children: [
  //     { path: '', redirectTo: 'list', pathMatch: 'full' },
  //     { path: 'list', component: OptionListComponent},
  //     { path: 'create', component: OptionCreateComponent},
  //     { path: 'details/:id', component: OptionDetailsComponent},
  //   ]
  //  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

export const routedComponents = [DashboardComponent, OptionsComponent];