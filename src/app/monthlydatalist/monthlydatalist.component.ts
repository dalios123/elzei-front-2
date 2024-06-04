import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { MonthlyData } from '../Models/MonthlyData';
import { MonthlyDataService } from '../Services/MonthlyData.service';
import { DialogAnimationsExampleDialogComponent } from '../dialog-animations-example-dialog/dialog-animations-example-dialog.component';
import { DialogEditComponent } from '../dialog-edit/dialog-edit.component';

@Component({
  selector: 'app-monthlydatalist',
  templateUrl: './monthlydatalist.component.html',
  styleUrl: './monthlydatalist.component.css'
})
export class MonthlydatalistComponent {
  monthlyDatas: any[] = []; // Renamed client to clients to represent an array of clients
  searchTerm: string = '';
  selectedmonthlyData: MonthlyData | null = null; // Renamed selectedSalary to selectedClient to reflect the entity

  constructor(private monthlyDataService: MonthlyDataService, private router: Router, private activatedRoute: ActivatedRoute,public dialog: MatDialog,) { }


  ngOnInit(): void {
    this.loadClients(); // Renamed loadClient to loadClients for consistency


  }

  loadClients(): void { // Renamed loadClient to loadClients for consistency
    this.monthlyDataService.getMonthlyDataS().subscribe(monthlyDatas => { // Renamed client to clients
      this.monthlyDatas = monthlyDatas; // Renamed client to clients
      console.log(this.monthlyDatas);
    });
  }





  viewDetails(monthlyData: MonthlyData): void {
    const dialogRef = this.dialog.open(DialogEditComponent, {
      width: '300px',
      data: monthlyData
       });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.router.navigate(['monthly-data', monthlyData.id]);
      }})
}


viewDetails2(data: MonthlyData): void {
  this.router.navigate(['monthlydataview', data.id]);
}

  selectMonthlyData(monthlyData: MonthlyData): void { // Renamed selectClienty to selectClient for consistency
    this.selectedmonthlyData = monthlyData; // Renamed selectedSalary to selectedClient to reflect the entity
  }


  deletemonthlydata(data:MonthlyData) {
    const dialogRef = this.dialog.open(DialogAnimationsExampleDialogComponent, {
      width: '300px',
      data: data
       });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
       this.monthlyDataService.delete(data.id).subscribe(
          () => {
            window.location.reload();
          },
          (error: HttpErrorResponse) => {
            console.error("Error deleting client:", error);
          }
        );
      }
    });

    console.log("monthly data deleted successfully.");
    this.loadClients();



  }
}
