import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router'; // Change import statement
import { CRA } from '../Models/CRA';
import { CRAService } from '../Services/CRA.service';
import { MissionService } from '../Services/Mission.service';
import { DialogAnimationsExampleDialogComponent } from '../dialog-animations-example-dialog/dialog-animations-example-dialog.component';
import { DialogEditComponent } from '../dialog-edit/dialog-edit.component';

@Component({
  selector: 'app-cralist',
  templateUrl: './cralist.component.html',
  styleUrls: ['./cralist.component.css'] // Fix styleUrl to styleUrls
})
export class CralistComponent implements OnInit {


  cra: CRA[] = [];
  searchTerm: string = '';
  searchPrenom: string = '';
  searchMatricule: string = '';
  selectedCRA: CRA | null = null;

  constructor(private craService: CRAService,private missionService: MissionService, private router: Router, private activatedRoute: ActivatedRoute,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadCRAs();
  }

  loadCRAs(): void {
    this.craService.getCRAS().subscribe(cra => {
      this.cra = cra;
    });
  }

  search(): void {
    if (this.searchTerm.trim()) {
      this.craService.searchCRA(this.searchTerm).subscribe(cra => {
        this.cra = cra;
      });
    } else {
      this.loadCRAs();
    }
  }



  selectCRA(cra: CRA): void {
    this.selectedCRA = cra;
  }


  deleteCompte(data:CRA) {
    const dialogRef = this.dialog.open(DialogAnimationsExampleDialogComponent, {
      width: '300px',
      data: data
       });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.craService.delete(data.id).subscribe(
          () => {
            window.location.reload();
          },
          (error: HttpErrorResponse) => {
            console.error("Error deleting CRA:", error);
          }
        );
      }
    });

    console.log("CRA deleted successfully.");
    this.loadCRAs();

    this.router.navigate(['/cralist']);

  }
  viewDetails(data:CRA) {
    const dialogRef = this.dialog.open(DialogEditComponent, {
      width: '300px',
      data: data
       });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.router.navigate(['CRA',data.id]);
      }
    });


    this.loadCRAs();

    this.router.navigate(['/cralist']);

  }





  viewDetails2(data: CRA): void {
  this.router.navigate(['craview', data.id]);
}






}
