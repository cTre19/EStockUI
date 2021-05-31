import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { NameCode } from '../models/namecode.model';
import { SearchStock } from '../models/search-stock.model';
import { Stock } from '../models/stock.model';
import { CompanyService } from '../services/company.service';
import { StockService } from '../services/stock.service';


@Component({
  selector: 'app-search-stocks',
  templateUrl: './search-stocks.component.html',
  styleUrls: ['./search-stocks.component.css']
})
export class SearchStocksComponent implements OnInit {

  searchStock: SearchStock;


  constructor(private stockService: StockService,
    private companyService: CompanyService) {
      this.searchStock = new SearchStock();
  }

  ngOnInit() {
    this.fetchCompanyNames();
  }

  fetchCompanyNames(): void {
    this.companyService.getAllNamesAndCodes().subscribe(
      (data: NameCode[]) => {
        console.log('loading company info');
        data.forEach(c => {
          this.searchStock.companyList.push({label: c.companyName, value: c.companyCode});
        });
      });
  }

  searchStocks() {
    if (!this.searchStock.selectedCompany || !this.searchStock.selectedStartDate || !this.searchStock.selectedEndDate) {
      this.searchStock.errorMessage = 'All fields are required before submitting the form!';
    } else {
      this.searchStock.errorMessage = '';
      console.log(this.searchStock.selectedCompany);
      console.log(this.searchStock.selectedStartDate);
      console.log(this.searchStock.selectedEndDate);

      this.stockService.searchStockByDateRange(this.searchStock.selectedCompany.toString(),
        this.searchStock.selectedStartDate.toISOString(), this.searchStock.selectedEndDate.toISOString()).subscribe(
          data => {
            console.log('inside searchStocks');
            this.searchStock.stockList = data;
          },
          error => {
            console.error('unable to search stocks');
          }
        );
    }
  }

}
