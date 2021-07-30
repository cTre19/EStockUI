import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserModel } from '../models/user.model';
import { map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl: string = 'http://localhost:9000';
  private serviceUrl: string = '/api/v1.0/market/user';
  private currentUserSubject: BehaviorSubject<any>;
  private currentUser: Observable<any>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser') || '{}'));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue() {
    return this.currentUserSubject.value;
  }

  registerNewUser(user: UserModel) {
    const body = JSON.stringify(user);
    return this.http.post(this.baseUrl + this.serviceUrl + '/register/user', body, httpOptions);
  }

  login(userEmail: string, password: string) {
    return this.http.post<any>(this.baseUrl + this.serviceUrl + '/login', {userEmail, password})
      .pipe(map((user: UserModel) => {
        // store user deatils and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
      }))
  }

  logout(): void {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }




}
