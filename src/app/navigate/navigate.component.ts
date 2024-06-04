import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigate',
  templateUrl: './navigate.component.html',
  styleUrls: ['./navigate.component.css'] // Fix the styleUrls property
})
export class NavigateComponent implements OnInit {
selectedPlanet: any;
  router: any;
parseNumeriqueSpace(arg0: number) {
throw new Error('Method not implemented.');
}
m: any;
switchMode(arg0: any) {
throw new Error('Method not implemented.');
}
below: any;
constructor(private router0:Router){}
  ngOnInit() {
  }
  deconnecter()
  {
   
      localStorage.removeItem('jwtToken');
      this.router0.navigate(["login"])
      
    
  }
  
}
