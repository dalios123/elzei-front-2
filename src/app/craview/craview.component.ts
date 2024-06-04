import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CRA } from '../Models/CRA';
import { Mission } from '../Models/Mission';
import { CRAService } from '../Services/CRA.service';
import { MissionService } from '../Services/Mission.service';

@Component({
  selector: 'app-craview',
  templateUrl: './craview.component.html',
  styleUrl: './craview.component.css'
})
export class CraviewComponent implements OnInit {

  CRA: CRA = {
    id: "",
    mois: "",
    nbjour: "",
    missionid: "",
    montantH: "",
    montantTTC: "",

  }

  myForm!: FormGroup;
  showParagraph: boolean | undefined;
  coefficientOptions: string[] = [];

  constructor(private fb: FormBuilder, private CRAService: CRAService , private MissionService: MissionService , private activatedRoute: ActivatedRoute ,
    private router: Router,private http: HttpClient, private datePipe: DatePipe,private route: ActivatedRoute) {} // Inject SimulatorService
  MissionS:any;
  selectedMission: Mission | undefined;
  MissionId: any;
  id!:string|null;
  selectedCra!:any;


  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');

    });
    if(this.id)
      {
        this.loadCraDetails(this.id);

      }
    const currentDate = new Date();
  // getMonth() returns month index starting from 0 (January) to 11 (December)
const month = currentDate.getMonth() + 1;
      this.myForm = this.fb.group({
        mois: [month],
        nbjour: [''],
        missionid: [''],
        pays: [''],
        montantH: [''],
        montantTTC: [''],
        Salaries:[''],
        Client:[''],
        tjm:[''],

      });
  this.listMission()

  }
  loadCraDetails(Id: string): void {
    // Récupérer les détails du simulateur depuis le service
    this.CRAService.getCRAById(Id).subscribe(
      (cra: CRA) => {

        this.selectedCra = cra;
        console.log(this.selectedCra);

        this.myForm.patchValue({
          nbjour: this.selectedCra?.nbjour || ''
        });
        this.myForm.patchValue({
          montantH: this.selectedCra?.montantH || ''
        });
        this.myForm.patchValue({
          montantTTC: this.selectedCra?.montantTTC || ''
        });


        this.myForm.patchValue({
          mois: this.selectedCra?.mois || ''
        });
        this.myForm.patchValue({
          missionid: this.selectedCra?.mission.id || ''
        });


        this.myForm.patchValue({
          tjm: this.selectedCra?.mission.tjm || ''
        });
        this.myForm.patchValue({
          Client: this.selectedCra?.mission.clientid.libelle || ''
        });

            const salariesNames = this.selectedCra?.mission.salariesid.map((salary: any) => salary.nom).join(' ');
        this.myForm.patchValue({
          Salaries: salariesNames
        });



      },
      (error: any) => {
        console.error('Erreur lors du chargement des détails du cra', error);
      }
    );
  }

  save(): void {
   // Récupérer les valeurs des champs du formulaire
   const formData = this.myForm.value;
   // Créer l'objet de données à envoyer au backend
   const bodyData = {
    id: this.id ?? formData.id,
     mois: formData.mois,
     nbjour: formData.nbjour,
     montantH: formData.montantH,
     montantTTC: formData.montantTTC,
     missionid: {
       id: formData.missionid,
     }
   };
   console.log(formData)
    this.CRAService.create(bodyData).subscribe(
      (res: any) => {
        console.log('CRA created successfully:', res);
        this.router.navigate(["/cralist"]);

      },
      (error: any) => {
          console.log('CRA created successfully:', bodyData);

        console.error('Error occurred while creating CRA:', error);
      }
    );
  }


  listMission(){
    this.MissionService.getMissionS().subscribe((res:any) =>{
      this.MissionS=res
    }
    )
  }
  fill() {
    //this.myForm.patchValue({ codemission: codemission });
    const selectedm = this.myForm.get('missionid')?.value;
    const m=this.MissionS.find((miss:any)=>miss.id === Number(selectedm));
    console.log(m);
    this.selectedMission=m;
    if(this.selectedMission)
      {
        const salariesNames = this.selectedMission.salariesid.map((salary: any) => salary.nom).join(' ');
    this.myForm.patchValue({
      Salaries: salariesNames
    });
    this.myForm.patchValue({
      Client: this.selectedMission.clientid?.libelle
    });
    this.myForm.patchValue({
      tjm: this.selectedMission.tjm
    });

      }

  }


  submitForm(): void {
    const tjm = this.myForm.get('tjm')?.value;
    const nbjour = this.myForm.get('nbjour')?.value;

//les formules de ecrant1
const result1: number = Number(tjm)*Number(nbjour);
const result2: number = result1 * 1.2;
console.log(tjm);
console.log(nbjour);

    this.myForm.get('montantH')?.setValue(result1);
    this.myForm.get('montantTTC')?.setValue(result2);

  }

}
