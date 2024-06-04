import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Mission } from '../Models/Mission';
import { Salaries } from '../Models/Salaries';
const baseurl = "http://localhost:7080/api/salaries";

@Injectable({
  providedIn: 'root'
})
export class SalariesService {

  private baseUrl: string = "http://localhost:7080/api/salaries";
  private baseUrl2: string = "http://localhost:7080/api/salaries/update";
  private baseUrl3: string = "http://localhost:7080/api/salaries/deletesalarie";

  token = localStorage.getItem('jwtToken');
  headers = new HttpHeaders().set('Authorization', `Bearer `+this.token);


  constructor(private http: HttpClient) { }
  getSalariesById(id: number): Observable<Salaries> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Salaries>(url,{headers: this.headers});
  }
  getSalariess(): Observable<Salaries[]> {
    return this.http.get<Salaries[]>(this.baseUrl,{headers: this.headers}).pipe(
      map(response => response)
    );
  }

  create(data: any): Observable<Salaries> {
    return this.http.post<Salaries>("http://localhost:7080/api/salaries/save", data,{headers: this.headers}).pipe(
      map(response => response)
    );
  }





  update(id: string,data: any): Observable<Salaries> {
    return this.http.put<Salaries>(`${this.baseUrl2}/${id}`, data,{headers: this.headers}).pipe(
      map(response => response)
    );
  }






  delete(id: String): Observable<Salaries> {
    return this.http.delete<Salaries>(`${this.baseUrl3}/${id}`,{headers: this.headers}).pipe(
      map(response => response)
    );
  }



  deleteAll(): Observable<Salaries> {
    return this.http.delete<Salaries>(this.baseUrl,{headers: this.headers}).pipe(
      map(response => response)
    );
  }

  getSalaries(id: number): Observable<Salaries> {
    return this.http.get<Salaries>("http://localhost:7080/api/salaries/save",{headers: this.headers}).pipe(
      map(response => response)
    )
  }


  getAllSalaries(): Observable<Salaries[]> {
    return this.http.get<Salaries[]>(`${this.baseUrl}`,{headers: this.headers});
  }

  searchSalaries(searchTerm: string): Observable<Salaries[]> {
    return this.http.get<Salaries[]>(`${this.baseUrl}`,{headers: this.headers}).pipe(
      map(salaries => {
        const searchTermParts = searchTerm.split(' ').filter(part => part.trim() !== ''); // Sépare les parties de searchTerm
          const searchTermRegex = new RegExp(searchTermParts.join('.*'), 'i'); // Crée une expression régulière pour rechercher le nom ou le prénom composé
        if (!isNaN(+searchTerm)) { // Vérifie si searchTerm est un nombre
          return salaries.filter(s => searchTermRegex.test(s.matricule) || searchTermRegex.test(s.numSS));
        } else if (searchTerm.includes('')) {
          const searchTermParts = searchTerm.split(' ').filter(part => part.trim() !== ''); // Sépare les parties de searchTerm
          const searchTermRegex = new RegExp(searchTermParts.join('.*'), 'i'); // Crée une expression régulière pour rechercher le nom ou le prénom composé
          return salaries.filter(s => searchTermRegex.test(s.nom) || searchTermRegex.test(s.prenom));
        } else {
          return salaries.filter(s => s.numSS === searchTerm || s.prenom === searchTerm);
        }
      })
    );
  }



  uploadPdf(file: File): Observable<string> {
    const formData: FormData = new FormData();
    formData.append('pdfFile', file, file.name);

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.set('Authorization', `Bearer `+this.token);

    return this.http.post<string>(`${this.baseUrl}/uploadpdf`, formData, { headers });
  }




  /*partie pdf*/


  uploadFile(formData: FormData):Observable<any> {
    return this.http.post('http://localhost:7080/api/v1/test/justificatif/fill-pdf', formData,{headers: this.headers});
  }



  getPdfs(): Observable<any[]> {
    return this.http.get<any[]>("http://localhost:7080/api/pdf",{headers: this.headers}).pipe(
      map(response => response)
    );
  }



  getmissionbyuserid(id : any): Observable<Mission> {
    return this.http.get<Mission>("http://localhost:7080/api/Mission/user/"+id,{headers: this.headers});
  }





}









