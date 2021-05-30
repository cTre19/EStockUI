import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Company } from '../models/company.model';
import { CompanyStock } from '../models/companystock.model';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
}
@Injectable()
export class CompanyService {

  private baseUrl: string;
  private serviceUrl: string;
  
  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:8080';
    this.serviceUrl = '/api/v1.0/market/company';
   }

  registerCompany(company: Company) {
    const body = JSON.stringify(company);
    return this.http.post(this.baseUrl + this.serviceUrl + '/register', body, httpOptions);
  }

  getAllCompaniesInfo(): Observable<CompanyStock[]> {
    return this.http.get<CompanyStock[]>(this.baseUrl + this.serviceUrl + '/getall');
  }

  getCompanyInfo(companyCode: string): Observable<CompanyStock> {
    return this.http.get<CompanyStock>(this.baseUrl + this. serviceUrl + '/info/' + companyCode);
  }

  deleteCompany(companyCode: string) {
    return this.http.delete(this.baseUrl + this.serviceUrl + '/delete/' + companyCode);
  }

}
