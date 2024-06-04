import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router'; // Changed import for ActivatedRoute
import { Mission } from '../Models/Mission';
import { MissionService } from '../Services/Mission.service';
import { DialogAnimationsExampleDialogComponent } from '../dialog-animations-example-dialog/dialog-animations-example-dialog.component';
import { DialogEditComponent } from '../dialog-edit/dialog-edit.component';

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css'] // Corrected styleUrl to styleUrls
})
export class MissionlistComponent  implements OnInit {

  missions: Mission[] = []; // Renamed mission to missions to represent an array of missions
  searchTerm: string = '';
  searchPrenom: string = ''; // Add this property for the first name
  searchMatricule: string = ''; // Add this property for the matricule
  selectedMission: Mission | null = null; // Renamed selectedSalary to selectedMission to reflect the entity

  constructor(private missionService: MissionService, private router: Router, private activatedRoute: ActivatedRoute,public dialog: MatDialog,) { }

  ngOnInit(): void {
    this.loadMissions(); // Renamed loadMission to loadMissions for consistency
  }

  loadMissions(): void { // Renamed loadMission to loadMissions for consistency
    this.missionService.getMissionS().subscribe(missions => { // Renamed mission to missions
      this.missions = missions; // Renamed mission to missions
    });
  }



  viewDetails(mission: Mission): void {
    const dialogRef = this.dialog.open(DialogEditComponent, {
      width: '300px',
      data: mission
       });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.router.navigate(['missiondetails', mission.id]);

      }})
  }




viewDetailsmission(mission: Mission): void {
  this.router.navigate(['missionview', mission.id]);
}

  selectMission(mission: Mission): void { // Renamed selectMissiony to selectMission for consistency
    this.selectedMission = mission; // Renamed selectedSalary to selectedMission to reflect the entity

  }

  deleteCompte(data:Mission) {
    const dialogRef = this.dialog.open(DialogAnimationsExampleDialogComponent, {
      width: '300px',
      data: data
       });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.missionService.delete(data.id).subscribe(
          () => {
            window.location.reload();
          },
          (error: HttpErrorResponse) => {
            console.error("Error deleting Mission:", error);
          }
        );
      }
    });
    console.log("Mission deleted successfully.");
    this.loadMissions();
    this.router.navigate(['/Missionlist']);

  }


  search(): void {
    if (this.searchTerm.trim()) {
      this.missionService.searchmission(this.searchTerm).subscribe(Mission => {
        this.missions = Mission;
      });
    } else {
      this.loadMissions();
    }
  }
}
