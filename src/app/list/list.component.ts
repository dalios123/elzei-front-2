import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Simulateur } from '../Models/Simulateur.model'; // Adjust the import path
import { SimulateurService } from '../Services/Simulateur.service'; // Adjust the import path
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {
  simulateurs: Simulateur[] = [];
  currentDate: string = '';

  
  constructor(
   
    private simulateurService: SimulateurService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private datePipe: DatePipe,
  ) { this.currentDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd') || '';}

  viewSimulateurDetails(simulateur: Simulateur): void {
    this.router.navigate(['Simulateurdetails', simulateur.id]);
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params: { [key: string]: any }) => {
      const successMessage = params['success'];

      if (successMessage) {
        console.log(successMessage);
        // Display the success message in your template or perform necessary actions
      }
      this.listSimulateurs();
    });
  }
  listSimulateurs(): void {
    this.simulateurService.getSimulateurs().subscribe(
      (simulateurs: Simulateur[]) => {
        this.simulateurs = simulateurs;
      },
      (error: any) => {
        console.error('Error loading simulateurs', error);
      }
    );
  }
}

