// data-api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  baseUrl = 'http://10.25.1.139:5236'

  constructor(private http: HttpClient) {}

  logInData(formData: any): Observable<any> {
    const url = this.baseUrl + '/User/Login'; // 登入
    return this.http.post<any>(url, formData);
  }
  signUpData(user: any): Observable<any> {
    const apiurl = this.baseUrl + '/User/Register'; // 註冊
    return this.http.post<any>(apiurl, user);
  }
}
