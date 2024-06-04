import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Mission } from '../Models/Mission';
import { MissionService } from '../Services/Mission.service';

@Component({
  selector: 'app-dialog-animations-example-dialog',
  templateUrl: './dialog-animations-example-dialog.component.html',
  styleUrl: './dialog-animations-example-dialog.component.css'
})
export class DialogAnimationsExampleDialogComponent {

mission!:Mission;
  constructor(

    private missionService :MissionService,
    public dialogRef: MatDialogRef<DialogAnimationsExampleDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    if(data.matricule===undefined)
      {
        this.missionService.getmissionbyclientid(data.id).subscribe((res:Mission) => {
          this.mission = res;
          console.log(res) ;
             });
      }

    else
    {
      this.missionService.getmissionbyuserid(data.id).subscribe((res:Mission) => {
        this.mission = res;
        console.log(res) ;
           });
    }
    console.log(data)}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
