import { HttpClient,HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthRequest } from '../Models/AuthRequest';
import { RegisterRequest } from '../Models/RegisterRequest';



@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  baseUrl="http://localhost:7080/api/auth"
  
  constructor( private httpclient: HttpClient) { }

  add(request:RegisterRequest):Observable<any>
  {
    
    return(this.httpclient.post(this.baseUrl+"/register", request));
  }
  authenticate(request:AuthRequest):Observable<any>
  {
    
    return(this.httpclient.post(this.baseUrl+"/authenticate", request));
  }
  getUser( token:string):Observable<any>
  {
    const params = new HttpParams().set("token",token)
    return(this.httpclient.get(this.baseUrl,{params}));
  }
  
}
