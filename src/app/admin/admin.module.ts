import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminRoutingModule } from './admin.routing.module';
import { OptionsComponent } from './options/options.component';
import { OptionCreateComponent } from './options/option-create/option-create.component';
import { OptionListComponent } from './options/option-list/option-list.component';
import { OptionDetailsComponent } from './options/option-details/option-details.component';
import { OptionsService } from './core/services/options.service';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../components/shared/shared.module';
import {HttpClientModule} from '@angular/common/http';
import { AdminReportComponent } from './dashboard/admin-report/admin-report.component';
import { OrdersComponent } from './dashboard/orders/orders.component';
import { InvoiceComponent } from './dashboard/invoice/invoice.component';
import { MessagesComponent } from './dashboard/messages/messages.component';



@NgModule({
  declarations: [
    DashboardComponent,
    OptionsComponent,
    OptionCreateComponent,
    OptionListComponent,
    OptionDetailsComponent,
    AdminReportComponent,
    OrdersComponent,
    InvoiceComponent,
    MessagesComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    HttpClientModule
  ],
  exports: [DashboardComponent],
  providers: [OptionsService]
})
export class AdminModule { }
