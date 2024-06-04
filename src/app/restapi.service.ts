import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RestapiService {

    private baseUrl = 'http://localhost:7080/api';
  HttpClient: any;
    constructor(private http:HttpClient) { }

  login(username:string,password:string){
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.http.get("http://localhost:7080/",{headers,responseType: 'text' as 'json'})
  }

    getUsers() {
      let username='javatechie'
      let password='jt143'
      const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
     return  this.http.get("http://localhost:7080/getUsers",{headers});
    }
  saveFormData(formData: any): Observable<any> {
      let username='javatechie'
      let password='jt143'
      const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.http.post("http://localhost:7080/api/save", formData,{headers});
  }

  downloadFile(){
    return this.HttpClient.get('http://localhost:4200/Simulateurdetails/1',
    {observe:'response',responseType:'blob'})
  }

}
