import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { NameCode } from '../models/namecode.model';
import { SearchStockModel } from '../models/search-stock.model';
import { StockModel } from '../models/stock.model';
import { CompanyService } from '../services/company.service';
import { StockService } from '../services/stock.service';


@Component({
  selector: 'app-search-stocks',
  templateUrl: './search-stocks.component.html',
  styleUrls: ['./search-stocks.component.css']
})
export class SearchStocksComponent implements OnInit {

  searchStockModel: SearchStockModel;


  constructor(private stockService: StockService,
    private companyService: CompanyService) {
    this.searchStockModel = new SearchStockModel();
  }

  ngOnInit() {
    this.fetchCompanyNames();
  }

  fetchCompanyNames(): void {
    this.companyService.getAllNamesAndCodes().subscribe(
      (data: NameCode[]) => {
        console.log('loading company info');
        data.forEach(c => {
          this.searchStockModel.companyList.push({
            label: c.companyName + ' (' + c.companyCode.toUpperCase() + ')',
            value: c.companyCode
          });
        });
      });
  }

  searchStocks() {
    if (!this.searchStockModel.selectedCompany || !this.searchStockModel.selectedStartDate || !this.searchStockModel.selectedEndDate) {
      this.searchStockModel.errorMessage = 'All fields are required before submitting the form!';
    } else {
      this.searchStockModel.hasSearched = true;
      this.searchStockModel.errorMessage = '';
      console.log(this.searchStockModel.selectedCompany);
      console.log(this.searchStockModel.selectedStartDate);
      console.log(this.searchStockModel.selectedEndDate);

      this.stockService.searchStockByDateRange(this.searchStockModel.selectedCompany.toString(),
        this.searchStockModel.selectedStartDate.toISOString(), this.searchStockModel.selectedEndDate.toISOString()).subscribe(
          data => {
            console.log('inside searchStocks');
            this.searchStockModel.stockList = data;
          },
          error => {
            console.error('unable to search stocks');
            this.searchStockModel.errorMessage = 'Error searching stocks: ' + error;
          });

      this.stockService.fetchStockStatsByDateRange(this.searchStockModel.selectedCompany.toString(),
        this.searchStockModel.selectedStartDate.toISOString(), this.searchStockModel.selectedEndDate?.toISOString()).subscribe(
          data => {
            console.log('fetching stats');
            this.searchStockModel.stats.min = data.min;
            this.searchStockModel.stats.max = data.max;
            this.searchStockModel.stats.avg = data.avg;
            console.log(this.searchStockModel.stats.min);
            console.log(this.searchStockModel.stats.max);
            console.log(this.searchStockModel.stats.avg);
          },
          error => {
            console.error('unable to fetch stats');
            this.resetStats();
          });
    }
  }

  private resetStats(): void {
    this.searchStockModel.stats.min = undefined;
    this.searchStockModel.stats.max = undefined;
    this.searchStockModel.stats.avg = undefined;
  }

  noResultsFound(): boolean {
    if (this.searchStockModel.hasSearched && this.searchStockModel?.stockList?.length == 0 && this.searchStockModel?.selectedCompany
      && this.searchStockModel?.selectedStartDate
      && this.searchStockModel?.selectedEndDate) {
      return true;
    } else {
      return false;
    }
  }

}
