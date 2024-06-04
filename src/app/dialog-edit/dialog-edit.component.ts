import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-edit',
  templateUrl: './dialog-edit.component.html',
  styleUrl: './dialog-edit.component.css'
})
export class DialogEditComponent {

constructor( public dialogRef: MatDialogRef<DialogEditComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any){
    console.log(data);

}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
