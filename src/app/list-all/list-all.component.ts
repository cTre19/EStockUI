import { Component, OnInit } from '@angular/core';
import { CompanyStockModel } from '../models/companystock.model';
import { CompanyService } from '../services/company.service';

@Component({
  selector: 'app-list-all',
  templateUrl: './list-all.component.html',
  styleUrls: ['./list-all.component.css']
})
export class ListAllComponent implements OnInit {

  companyInfoList:CompanyStockModel[] = new Array;

  constructor(private companyService: CompanyService) { }

  ngOnInit(): void {
    this.loadAllInfo();
  }

  loadAllInfo(): void {
    this.companyService.getAllCompaniesInfo().subscribe(
      data => {
        console.log('loading all company info');
        this.companyInfoList = data;
        return true;
      },
      error => {
        console.log("error", error);
        return error;
      }
    );
  }

}
