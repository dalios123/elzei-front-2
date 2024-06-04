import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Mission } from '../Models/Mission';

const baseurl = "http://localhost:7080/api/Mission";

@Injectable({
  providedIn: 'root'
})
export class MissionService {

  token = localStorage.getItem('jwtToken');
  headers = new HttpHeaders().set('Authorization', `Bearer `+this.token);
  
  private baseUrl: string = "http://localhost:7080/api/Mission";
  private baseUrl2: string = "http://localhost:7080/api/Mission/updateMission";
  private baseUrl3: string = "http://localhost:7080/api/Mission/deletemission";



  constructor(private http: HttpClient) { }
  getMissionById(id: string): Observable<Mission> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Mission>(url,{headers: this.headers});
  }
  getMissionS(): Observable<Mission[]> {
    return this.http.get<Mission[]>(this.baseUrl,{headers: this.headers}).pipe(
      map(response => response)
    );
  }

  create(data: any): Observable<Mission> {
    return this.http.post<Mission>("http://localhost:7080/api/Mission/save", data,{headers: this.headers}).pipe(
      map(response => response)
    );
  }

  update(id: string,data: any): Observable<Mission> {
    return this.http.put<Mission>(`${this.baseUrl2}/${id}`, data,{headers: this.headers}).pipe(
      map(response => response)
    );
  }

  delete(id: String): Observable<Mission> {
    return this.http.delete<Mission>(`${this.baseUrl3}/${id}`,{headers: this.headers}).pipe(
      map(response => response)
    );
  }

  deleteAll(): Observable<Mission> {
    return this.http.delete<Mission>(this.baseUrl,{headers: this.headers}).pipe(
      map(response => response)
    );
  }

  getMission(id: number): Observable<Mission> {
    return this.http.get<Mission>(`${this.baseUrl}/${id}`,{headers: this.headers}).pipe(
      map(response => response)
    )
  }


  getAllMission(): Observable<Mission[]> {
    return this.http.get<Mission[]>(`${this.baseUrl}`,{headers: this.headers});
  }

  searchmission(searchTerm: string): Observable<Mission[]> {
    return this.http.get<Mission[]>(`${this.baseUrl}`,{headers: this.headers}).pipe(
      map(Mission => {
        if (!isNaN(+searchTerm)) { // Vérifie si searchTerm est un nombre
          return Mission.filter(c => c.codemission === searchTerm);
        } else if (searchTerm.includes('')) {
          const searchTermParts = searchTerm.split(' ').filter(part => part.trim() !== ''); // Sépare les parties de searchTerm
          const searchTermRegex = new RegExp(searchTermParts.join('.*'), 'i'); // Crée une expression régulière pour rechercher le nom ou le prénom composé
          return Mission.filter(s => searchTermRegex.test(s.codemission) || searchTermRegex.test(s.codemission));
        } else {
          return Mission.filter(s => s.codemission === searchTerm || s.codemission === searchTerm);
        }
      })
    );
  }
  getmissionbyuserid(id : any): Observable<Mission> {
    return this.http.get<Mission>("http://localhost:7080/api/Mission/user/"+id,{headers: this.headers});
  }
  getmissionbyclientid(id : any): Observable<Mission> {
    return this.http.get<Mission>("http://localhost:7080/api/Mission/client/"+id,{headers: this.headers});
  }

}









