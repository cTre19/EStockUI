import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCompanyComponent } from './add-company/add-company.component';
import { CompanyService } from './services/company.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ListAllComponent } from './list-all/list-all.component';
import { SearchStocksComponent } from './search-stocks/search-stocks.component';
import { StockService } from './services/stock.service';
import { DropdownModule} from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserAuthComponent } from './user-auth/user-login.component';
import { UserService } from './services/user.service';


@NgModule({
  declarations: [
    AppComponent,
    AddCompanyComponent,
    ListAllComponent,
    SearchStocksComponent,
    UserAuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    DropdownModule,
    CalendarModule,
    BrowserAnimationsModule
  ],
  providers: [CompanyService, StockService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
