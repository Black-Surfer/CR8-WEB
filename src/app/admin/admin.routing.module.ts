import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { OptionsComponent } from "./options/options.component";
import { OptionCreateComponent } from "./options/option-create/option-create.component";
import { LoginComponent } from "../components/login/login.component";
import { OptionListComponent } from "./options/option-list/option-list.component";
import { OptionDetailsComponent } from "./options/option-details/option-details.component";

const routes: Routes = [
  {
    path: '', component: DashboardComponent,
  },
  {
    path: 'options', component: OptionsComponent, children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: OptionListComponent, pathMatch:'full' },
      { path: 'create', component: OptionCreateComponent },
      { path: 'details/:id', component: OptionDetailsComponent },
    ]
  },
  {
    path: '**', component: LoginComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

export const routedComponents = [DashboardComponent, OptionsComponent];