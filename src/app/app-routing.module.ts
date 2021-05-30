import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCompanyComponent } from './add-company/add-company.component';
import { ListAllComponent } from './list-all/list-all.component';
import { SearchStocksComponent } from './search-stocks/search-stocks.component';

const routes: Routes = [
  { path: 'AddCompany', component: AddCompanyComponent },
  { path: 'ListAllCompaniesInfo', component: ListAllComponent},
  { path: 'SearchStocksComponent', component: SearchStocksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
