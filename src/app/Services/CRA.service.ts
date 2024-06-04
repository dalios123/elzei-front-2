import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CRA } from '../Models/CRA';

const baseurl = "http://localhost:7080/api/CRA";

@Injectable({
  providedIn: 'root'
})
export class CRAService {

  token = localStorage.getItem('jwtToken');
  headers = new HttpHeaders().set('Authorization', `Bearer `+this.token);
  
  private baseUrl: string = "http://localhost:7080/api/CRA";
  private baseUrl2: string = "http://localhost:7080/api/CRA/updateCRA";
  private baseUrl3: string = "http://localhost:7080/api/CRA/deleteCRA";



  constructor(private http: HttpClient) { }
  getCRAById(id: string): Observable<CRA> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<CRA>(url,{headers: this.headers});
  }
  getCRAS(): Observable<CRA[]> {
    return this.http.get<CRA[]>(this.baseUrl, {headers: this.headers}).pipe(
      map(response => response)
    );
  }

  create(data: any): Observable<CRA> {
    return this.http.post<CRA>("http://localhost:7080/api/CRA/save", data,{headers: this.headers}).pipe(
      map(response => response)
    );
  }
  update(id: string,data: any): Observable<CRA> {
    return this.http.put<CRA>(`${this.baseUrl2}/${id}`, data,{headers: this.headers}).pipe(
      map(response => response)
    );
  }
  delete(id: any): Observable<CRA> {
    return this.http.delete<CRA>(`${this.baseUrl3}/${id}`,{headers: this.headers}).pipe(
      map(response => response)
    );
  }

  deleteAll(): Observable<CRA> {
    return this.http.delete<CRA>(this.baseUrl,{headers: this.headers}).pipe(
      map(response => response)
    );
  }

  getCRA(id: number): Observable<CRA> {
    return this.http.get<CRA>(`${this.baseUrl}/${id}`,{headers: this.headers}).pipe(
      map(response => response)
    )
  }


  getAllCRA(): Observable<CRA[]> {
    return this.http.get<CRA[]>(`${this.baseUrl}`,{headers: this.headers});
  }


  searchCRA(searchTerm: string): Observable<CRA[]> {
    return this.http.get<CRA[]>(`${this.baseUrl}`,{headers: this.headers}).pipe(
      map(client => {
        if (!isNaN(+searchTerm)) { // Vérifie si searchTerm est un nombre
          return client.filter(c => c.montantH === searchTerm);
        } else if (searchTerm.includes('')) {
          const searchTermParts = searchTerm.split(' ').filter(part => part.trim() !== ''); // Sépare les parties de searchTerm
          const searchTermRegex = new RegExp(searchTermParts.join('.*'), 'i'); // Crée une expression régulière pour rechercher le nom ou le prénom composé
          return client.filter(s => searchTermRegex.test(s.montantH) || searchTermRegex.test(s.montantH));
        } else {
          return client.filter(s => s.montantH === searchTerm || s.montantH === searchTerm);
        }
      })
    );
  }
  getCRAByMissionId(id: string): Observable<CRA[]> {
    const url = `${this.baseUrl}/user/${id}`;
    return this.http.get<CRA[]>(url,{headers: this.headers});
  }
}









