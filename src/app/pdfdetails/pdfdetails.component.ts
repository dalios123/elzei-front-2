import { Component } from '@angular/core';
import { SalariesService } from '../Services/Salaries.service';

@Component({
  selector: 'app-pdfdetails',
  templateUrl: './pdfdetails.component.html',
  styleUrls: ['./pdfdetails.component.css']
})
export class PdfdetailsComponent {
constructor(private salariesService :SalariesService){this.getAllPdfs()}

selectedFile : File | null=null;

uploadpdf(event: Event){
const target = event.target as HTMLInputElement;
this.selectedFile = target.files ? target.files [0]  : null;
if (this.selectedFile) {
const formData = new FormData();
formData.append('file', this.selectedFile, this.selectedFile.name);
this.salariesService.uploadFile( formData).subscribe((res:any)=>{
  console.log(res);
  window.location.reload();
},(error)=>{
console.log(error)
})
}
}

pdfs:any[] = [];
getAllPdfs(){
  this.salariesService.getPdfs().subscribe((res:any)=>{
    console.log(res)
    this.pdfs = res;
    },(error)=>{
      console.log(error)
      })
}


  }



