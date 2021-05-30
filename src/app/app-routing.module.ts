import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCompanyComponent } from './add-company/add-company.component';
import { ListAllComponent } from './list-all/list-all.component';

const routes: Routes = [
  { path: 'AddCompany', component: AddCompanyComponent },
  { path: 'listAllCompaniesInfo', component: ListAllComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
