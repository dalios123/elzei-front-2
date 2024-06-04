import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Simulateur } from '../Models/Simulateur.model';
import { SimulateurService } from '../Services/Simulateur.service';
import { HttpClient } from '@angular/common/http';
import * as XLSX from 'xlsx'

@Component({
  selector: 'app-simulateurdetails',
  templateUrl: './simulateurdetails.component.html',
  styleUrls: ['./simulateurdetails.component.css']
})
export class SimulateurdetailsComponent implements OnInit {
  selectedSimulateur?: Simulateur;
  simulateurId?: number;
  dataExel: any;

  constructor(
    private simulateurService: SimulateurService,
    private activatedRoute: ActivatedRoute,
  ) {}
  simulateur: Simulateur | null = null;
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const simulateurId = +params['id']; // Extraire simulateurId des paramètres et le convertir en nombre
      this.loadSimulateurDetails(simulateurId); // Appeler la méthode pour charger les détails du simulateur
    });
  }
  
  loadSimulateurDetails(simulateurId: number): void {
    // Récupérer les détails du simulateur depuis le service
    this.simulateurService.getSimulateurById(simulateurId).subscribe(
      (simulateur: Simulateur) => {
        
        this.selectedSimulateur = simulateur;
      },
      (error: any) => {
        console.error('Erreur lors du chargement des détails du simulateur', error);
      }
    );
  }
  
  
  submitForm(): void {
    // Logic to handle form submission
  }

  save(): void {
    // Logic to save form data
  }
  fileName="Excelsheet.xlsx";
  exportexcel(): void {
    // Selecting all input elements inside the 'dataexel' div
    const inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll('#dataexel input');
    
    // Creating an array to hold the data
    const data: any[][] = [];
  
    // Pushing the ID and value of each input element into the data array
    inputs.forEach(input => {
      data.push([input.id, input.value]);
    });
  
    // Creating the worksheet and workbook
    const ws: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(data);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
  
    // Saving the workbook to a file
    XLSX.writeFile(wb, this.fileName);
  }
  

}