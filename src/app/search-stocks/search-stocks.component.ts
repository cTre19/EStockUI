import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SelectItem } from 'primeng/api';
import { CompanyInterface } from '../models/company.interface';
import { Company } from '../models/company.model';
import { CompanyStock } from '../models/companystock.model';
import { Stock } from '../models/stock.model';
import { CompanyService } from '../services/company.service';
import { StockService } from '../services/stock.service';
// import { DropdownModule } from 'primeng/dropdown';


@Component({
  selector: 'app-search-stocks',
  templateUrl: './search-stocks.component.html',
  styleUrls: ['./search-stocks.component.css']
})
export class SearchStocksComponent implements OnInit {

  companyList: SelectItem[];
  selectedCompany!: SelectItem;
  selectedStartDate!: Date;
  selectedEndDate!: Date;
  stockList: Stock[];
  // companyStocklist: CompanyStock[] = new Array;
  // searchFlag: boolean = false;
  // searchStocksForm: FormGroup;
  errorMessage: string = '';


  constructor(private stockService: StockService,
    private companyService: CompanyService) {
    this.companyList = [
      { label: 'Amazon', value: 'AMZ' },
      { label: 'Cognizant', value: 'CTSH' }
    ];
    this.stockList = new Array;
  }

  ngOnInit() {

  }

  fetchCompanyNames(): void {
    this.companyService.getAllCompaniesInfo().subscribe(
      data => {
        console.log('loading company info');
        // this.companyStocklist = data;
      }
    )
  }

  // changeStockCode(selectedValue: any) {
  //   this.selectedCompany = selectedValue;
  //   console.log(this.selectedCompany);
  // }

  searchStocks() {
    if (!this.selectedCompany || !this.selectedStartDate || !this.selectedEndDate) {
      this.errorMessage = 'All fields are required before submitting the form!';
    } else {
      this.errorMessage = '';
      console.log(this.selectedCompany);
      console.log(this.selectedStartDate);
      console.log(this.selectedEndDate);

      this.stockService.searchStockByDateRange(this.selectedCompany.toString(),
        this.selectedStartDate.toISOString(), this.selectedEndDate.toISOString()).subscribe(
          data => {
            console.log('inside searchStocks');
            this.stockList = data;
          },
          error => {
            console.error('unable to search stocks');
          }
        );
    }
  }

}
