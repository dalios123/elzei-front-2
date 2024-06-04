import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Simulateur } from '../Models/Simulateur.model';
const baseurl = "http://localhost:7080/api/Simulation";

@Injectable({
  providedIn: 'root'
})
export class SimulateurService {

  private baseUrl: string = "http://localhost:7080/api/Simulation";
  token = localStorage.getItem('jwtToken');
  headers = new HttpHeaders().set('Authorization', `Bearer `+this.token);

  constructor(private http: HttpClient) { }
  getSimulateurById(id: number): Observable<Simulateur> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Simulateur>(url,{headers: this.headers});
  }
  getSimulateurs(): Observable<Simulateur[]> {
    return this.http.get<Simulateur[]>(this.baseUrl,{headers: this.headers}).pipe(
      map(response => response)
    );
  }

  create(data: any): Observable<Simulateur> {
    return this.http.post<Simulateur>("http://localhost:7080/api/Simulation/save", data,{headers: this.headers}).pipe(
      map(response => response)
    );
  }

  update(id: any, data: any): Observable<Simulateur> {
    return this.http.put<Simulateur>(`${this.baseUrl}/${id}`, data,{headers: this.headers}).pipe(
      map(response => response)
    );
  }

  delete(id: any): Observable<Simulateur> {
    return this.http.delete<Simulateur>(`${this.baseUrl}/${id}`,{headers: this.headers}).pipe(
      map(response => response)
    );
  }

  deleteAll(): Observable<Simulateur> {
    return this.http.delete<Simulateur>(this.baseUrl,{headers: this.headers}).pipe(
      map(response => response)
    );
  }

  getSimulateur(id: number): Observable<Simulateur> {
    return this.http.get<Simulateur>(`${this.baseUrl}/${id}`,{headers: this.headers}).pipe(
      map(response => response)
    )
  }
}
