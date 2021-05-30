import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Stock } from '../models/stock.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
}
@Injectable()
export class StockService {

  private baseUrl: string;
  private serviceUrl: string;
  
  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:8080';
    this.serviceUrl = '/api/v1.0/market/stock';
   }

   searchStockByDateRange(companyCode: string, startDate: string, endDate: string):
    Observable<Stock[]> {
      return this.http.get<Stock[]>(this.baseUrl + this.serviceUrl + '/get/' + companyCode + '/' +
        startDate + '/' + endDate);
   }

   addStockToCompany(stock: Stock) {
     const body = JSON.stringify(stock);
      return this.http.post(this.baseUrl + this.serviceUrl + '/add/' + stock.companyCode, body, httpOptions);
   }
  
}
