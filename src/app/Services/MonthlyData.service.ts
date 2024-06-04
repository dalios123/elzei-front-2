import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MonthlyData } from '../Models/MonthlyData';

const baseurl = "http://localhost:7080/api/MonthlyData";

@Injectable({
  providedIn: 'root'
})
export class MonthlyDataService {

  token = localStorage.getItem('jwtToken');
  headers = new HttpHeaders().set('Authorization', `Bearer `+this.token);

  private baseUrl: string = "http://localhost:7080/api/monthlyData";
  private baseUrl2: string = "http://localhost:7080/api/monthlyData/updatemonthlyData";
  private baseUrl3: string = "http://localhost:7080/api/monthlyData/deletemonthlyData";



  constructor(private http: HttpClient) { }
  getMonthlyDataById(id: string): Observable<MonthlyData> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<MonthlyData>(url);
  }
  getMonthlyDataS(): Observable<MonthlyData[]> {
    return this.http.get<MonthlyData[]>(this.baseUrl,{headers: this.headers}).pipe(
      map(response => response)
    );
  }

  create(data: any): Observable<MonthlyData> {
    return this.http.post<MonthlyData>("http://localhost:7080/api/monthlyData/save", data,{headers: this.headers}).pipe(
      map(response => response)
    );
  }
  update(id: string,data: any): Observable<MonthlyData> {
    return this.http.put<MonthlyData>(`${this.baseUrl2}/${id}`, data,{headers: this.headers}).pipe(
      map(response => response)
    );
  }
  delete(id: any): Observable<MonthlyData> {
    return this.http.delete<MonthlyData>("http://localhost:7080/api/monthlyData/deleteMonthlyData/"+id,{headers: this.headers}).pipe(
      map(response => response)
    );
  }

  deleteAll(): Observable<MonthlyData> {
    return this.http.delete<MonthlyData>(this.baseUrl,{headers: this.headers}).pipe(
      map(response => response)
    );
  }

  getMonthlyData(id: number): Observable<MonthlyData> {
    return this.http.get<MonthlyData>(`${this.baseUrl}/${id}`,{headers: this.headers}).pipe(
      map(response => response)
    )
  }


  getAllMonthlyData(): Observable<MonthlyData[]> {
    return this.http.get<MonthlyData[]>(`${this.baseUrl}`,{headers: this.headers});
  }


}









