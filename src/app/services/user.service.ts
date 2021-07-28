import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from '../models/user.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
}
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl: string;
  private serviceUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:9000';
    this.serviceUrl = '/api/v1.0/market/user';
   }

   findUser(userEmail: string): Observable<UserModel> {
     return this.http.get<UserModel>(this.baseUrl + this.serviceUrl + '/get/user/' + userEmail);
   }
   
   registerNewUser(user: UserModel) {
     const body = JSON.stringify(user);
     return this.http.post(this.baseUrl + this.serviceUrl + '/register/user', body, httpOptions);
   }

   
}
