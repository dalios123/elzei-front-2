import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestapiService } from '../restapi.service';
import { AuthRequest } from '../Models/AuthRequest';
import { AuthenticationService } from '../Services/authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username!: string;
  password!: string;
  message: any
  request= new AuthRequest();

  constructor(private service: RestapiService,private authenticationService:AuthenticationService,private router:Router) { }

  ngOnInit() {
  }

  submitForm() {
    this.authenticationService.authenticate(this.request).subscribe(
      data => {
        localStorage.setItem('jwtToken', data.jwtToken);
        console.log(data.jwtToken);
        this.router.navigate(["/home"]);
      },
      error => {
        alert('Bad credentials. Please try again.');
      }
    );
  }
  doLogin() {
    let resp = this.service.login(this.username, this.password);
    resp.subscribe(data => {
      this.message = data;
     this.router.navigate(["/home"])
    });
  }
}

  

  