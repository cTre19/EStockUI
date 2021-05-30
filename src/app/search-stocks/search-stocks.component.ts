import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CompanyInterface } from '../models/company.interface';
import { CompanyStock } from '../models/companystock.model';
import { Stock } from '../models/stock.model';
import { CompanyService } from '../services/company.service';
import { StockService } from '../services/stock.service';

@Component({
  selector: 'app-search-stocks',
  templateUrl: './search-stocks.component.html',
  styleUrls: ['./search-stocks.component.css']
})
export class SearchStocksComponent {

  companyStocklist: CompanyStock[] = new Array;
  stockList: Stock[] = new Array;
  companyCodeList: CompanyInterface[];
  searchFlag: boolean = false;
  selectedCompanyCode: string = "blank";
  selectedStartDate: Date = new Date;
  selectedEndDate: Date = new Date;

  constructor(private stockService: StockService,
    private companyService: CompanyService) {
      this.companyCodeList  = [
        { name: 'Amazon', code: 'AMZ' },
        { name: 'Cognizant', code: 'CTSH'}
      ];
    }

  fetchCompanyNames(): void {
    this.companyService.getAllCompaniesInfo().subscribe(
      data => {
        console.log('loading company info');
        this.companyStocklist = data;
      }
    )
  }

  searchStocks() {
    this.stockService.searchStockByDateRange(this.selectedCompanyCode, 
      this.selectedStartDate.toISOString(), this.selectedEndDate.toISOString()).subscribe(
        data => {
          this.stockList = data;
        }
      )
  }

}
