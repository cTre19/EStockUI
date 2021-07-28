import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CompanyModel } from '../models/company.model';
import { CompanyStockModel } from '../models/companystock.model';
import { Observable } from 'rxjs';
import { NameCode } from '../models/namecode.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
}
@Injectable()
export class CompanyService {

  private baseUrl: string;
  private serviceUrl: string;
  
  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:9000';
    this.serviceUrl = '/api/v1.0/market/company';
   }

  registerCompany(company: CompanyModel) {
    const body = JSON.stringify(company);
    return this.http.post(this.baseUrl + this.serviceUrl + '/register', body, httpOptions);
  }

  getAllCompaniesInfo(): Observable<CompanyStockModel[]> {
    return this.http.get<CompanyStockModel[]>(this.baseUrl + this.serviceUrl + '/getall');
  }

  getCompanyInfo(companyCode: string): Observable<CompanyStockModel> {
    return this.http.get<CompanyStockModel>(this.baseUrl + this. serviceUrl + '/info/' + companyCode);
  }

  deleteCompany(companyCode: string) {
    return this.http.delete(this.baseUrl + this.serviceUrl + '/delete/' + companyCode);
  }

  getAllNamesAndCodes(): Observable<NameCode[]> {
    return this.http.get<NameCode[]>(this.baseUrl + this.serviceUrl + '/getall/namesandcodes');
  }

}
