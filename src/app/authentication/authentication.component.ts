import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterRequest } from '../Models/RegisterRequest';
import { AuthenticationService } from '../Services/authentication.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrl: './authentication.component.css'
})
export class AuthenticationComponent {

  request= new RegisterRequest();
  
  constructor(private authenticationService:AuthenticationService,private router:Router){}

  submitForm(){
   
    console.log(this.request);
    
    this.authenticationService.add(this.request).subscribe(
     data=>{
        this.router.navigate(["login"])
     },
     error=>{console.error(error);}
     
    )
  }  

}
