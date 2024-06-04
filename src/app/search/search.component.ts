import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Salaries } from '../Models/Salaries';
import { SalariesService } from '../Services/Salaries.service';
import { DialogAnimationsExampleDialogComponent } from '../dialog-animations-example-dialog/dialog-animations-example-dialog.component';
import { DialogEditComponent } from '../dialog-edit/dialog-edit.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'

})
export class SearchComponent {

// search.component.ts

  salaries: Salaries[] = [];
  searchTerm: string = '';
  searchPrenom: string = ''; // Ajoutez cette propriété pour le prénom
  searchMatricule: string = ''; // Ajoutez cette propriété pour le matricule
  selectedSalary: Salaries | null = null;


  constructor(private salariesService: SalariesService, private router: Router,private activatedRoute: ActivatedRoute,public dialog: MatDialog,) { }

  ngOnInit(): void {
    this.loadSalaries();
  }

  loadSalaries(): void {
    this.salariesService.getSalariess().subscribe(salaries => {
      this.salaries = salaries;
    });
  }

  search(): void {
    if (this.searchTerm.trim()) {
      this.salariesService.searchSalaries(this.searchTerm).subscribe(salaries => {
        this.salaries = salaries;
      });
    } else {
      this.loadSalaries();
    }
  }


  viewDetails(salarie: Salaries): void {
    const dialogRef = this.dialog.open(DialogEditComponent, {
      width: '300px',
      data: salarie
       });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
    this.router.navigate(['salariesdetails', salarie.id]);
  }})

}


viewDetailssalarise(salarie: Salaries): void {
  this.router.navigate(['salariesview', salarie.id]);
}


viewDetails2(salarie: Salaries): void {
  this.router.navigate(['pdfsalaries', salarie.id]);
}



  selectSalary(salaries: Salaries): void {
    this.selectedSalary = salaries;
  }


  deleteCompte(data:Salaries) {
    const dialogRef = this.dialog.open(DialogAnimationsExampleDialogComponent, {
      width: '300px',
      data: data
       });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.salariesService.delete(data.id).subscribe(
          () => {
            window.location.reload();
          },
          (error: HttpErrorResponse) => {
            console.error("Error deleting Salaries:", error);
          }
        );
      }
    });
    console.log("Salaries deleted successfully.");
    this.loadSalaries();

    this.router.navigate(['/search']);

  }
}








