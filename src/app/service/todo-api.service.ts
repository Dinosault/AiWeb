// data-api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  private apiUrl = 'http://10.25.1.248:5154/UserAccount/AddAccount'; 

  constructor(private http: HttpClient) {}

  getCityOptions(): Observable<any> {
    const url = `${this.apiUrl}`;
    return this.http.get(url);
  }
  postData(formData: any): Observable<any> {
    const url = `${this.apiUrl}`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post(url, formData, { headers });
  }
}
