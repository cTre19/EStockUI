import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StatisticsModel } from '../models/statistics-model';
import { StockModel } from '../models/stock.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
}
@Injectable()
export class StockService {

  private baseUrl: string;
  private serviceUrl: string;
  
  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:9000';
    this.serviceUrl = '/api/v1.0/market/stock';
   }

   searchStockByDateRange(companyCode: string, startDate: string, endDate: string):
    Observable<StockModel[]> {
      return this.http.get<StockModel[]>(this.baseUrl + this.serviceUrl + '/get/' + companyCode + '/' +
        startDate + '/' + endDate);
   }

   fetchStockStatsByDateRange(companyCode: string, startDate: string, endDate: string):
    Observable<StatisticsModel> {
      return this.http.get<StatisticsModel>(this.baseUrl + this.serviceUrl + '/getstats/' + companyCode + '/' +
        startDate + '/' + endDate);
   }

   addStockToCompany(stock: StockModel) {
     const body = JSON.stringify(stock);
      return this.http.post(this.baseUrl + this.serviceUrl + '/add/' + stock.companyCode, body, httpOptions);
   }
  
}
