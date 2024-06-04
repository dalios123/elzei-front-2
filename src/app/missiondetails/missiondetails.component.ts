import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Mission } from '../Models/Mission';
import { ClientService } from '../Services/Client.service';
import { MissionService } from '../Services/Mission.service';
import { SalariesService } from '../Services/Salaries.service';


@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrl: './missiondetails.component.css'
})
export class MissiondetailsComponent {

  users = new FormControl([]);
  clientss = new FormControl([]);


  selectedMission?: Mission;
  myForm!: FormGroup;
  showParagraph: boolean | undefined;
  coefficientOptions: string[] = [];
  countryFormGroup: FormGroup | undefined;
  currentDate: string = '';
  constructor(private fb: FormBuilder,private SalariesService: SalariesService, private ClientService: ClientService, private MissionService: MissionService, private activatRoute:ActivatedRoute,private datePipe: DatePipe,private router:Router ) {this.currentDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd') || ''

  } // Inject SimulatorService
   id:string="";
   Clients:any;
   Salariess:any;
   codemission="";

  ngOnInit(): void {
    this.activatRoute.params.subscribe(params => {
      this.id= params['id']; // Extraire simulateurId des paramètres et le convertir en nombre
      this.loadMissionDetails(this.id);
      console.log(this.id) // Appeler la méthode pour charger les détails du simulateur
    });
    this.myForm = this.fb.group({
      datedebut: [''],
      datefin: [''],
      tjm: [''],
      codemission: [''],
      clientid: [''],
      salariesid: [''],

    });

  }
  selectedclient:string="";
  selectedsalaries:string="";

  loadMissionDetails(MissionId: string): void {
    // Récupérer les détails du simulateur depuis le service
    this.MissionService.getMissionById(MissionId).subscribe(
      (Mission: Mission) => {

        this.selectedMission = Mission;
        console.log(this.selectedMission.clientid);

        this.myForm.patchValue({
          clientid:this.selectedMission.clientid.id
        });/*rtour de client dans le mission update*/
        this.listClient();
        this.listSalaries();
      },
      (error: any) => {
        console.error('Erreur lors du chargement des détails du Mission', error);

      }
    );
  }
   updateMission(): void {
    if (this.selectedMission) {
      const id = this.selectedMission?.id;
      const updatedData = {
          datedebut: this.myForm.get('datedebut')?.value,
          datefin: this.myForm.get('datefin')?.value,
          tjm: this.myForm.get('tjm')?.value,
          codemission: this.myForm.get('codemission')?.value,

          clientid: {
            id: this.myForm.get('clientid')?.value,
          },
          salariesid:this.users?.value?.map(user => ({ id: user }))
      };
      if (updatedData.datedebut==''){
        updatedData.datedebut=this.selectedMission?.datedebut;
      }
      if (updatedData.datefin==''){
        updatedData.datefin=this.selectedMission?.datefin;
      }
      if (updatedData.tjm==''){
        updatedData.tjm=this.selectedMission?.tjm;
      }
      if (updatedData.codemission==''){
        updatedData.codemission=this.selectedMission?.codemission;
      }
      if (updatedData.clientid.id==''){
        updatedData.clientid.id=this.selectedMission?.clientid.id;
      }
      console.log(updatedData);
      this.MissionService.update(this.id, updatedData).subscribe(
        (response: Mission) => {
          // Handle successful update response
          this.router.navigate(["/missionlist"]);
          console.log('Mission updated successfully:', response);

        },
        (error: any) => {
          // Handle error
          console.error('Error updating Mission:', error);
        }
      );
    }
  }
  listClient() {
    this.ClientService.getClients().subscribe((res: any) => {
      this.Clients = res;
      console.log(this.Clients = res);
    });
  }


  listSalaries() {
    this.SalariesService.getSalariess().subscribe((res: any) => {
      this.Salariess = res;
      this.users=new FormControl(this.selectedMission?.salariesid.map((salariesid:any)=>salariesid.id));
           console.log(this.users);
    });
  }
  fillCode(): void {
    // Récupérez les valeurs sélectionnées des combobox
    const selectedClientLibelle = this.myForm.get('clientid')?.value;
    const selectedSalariesNom = this.users?.value;
    console.log(this.myForm.get('clientid')?.value);



    // Utilisez le libellé sélectionné pour trouver le client correspondant
    const selectedClient = this.Clients.find((client: any) => client.id === Number(selectedClientLibelle));
    // Step 1: Find the selected salaries
    const selectedSalaries = this.users?.value?.map(selectedId =>
      this.Salariess.find((salaries: any) => salaries.id === Number(selectedId))
    );

    // Step 2: Extract the 'nom' property from each selected salary
    const salariesNames = selectedSalaries?.map(salaries => salaries.nom+salaries.prenom);

    // Step 3: Join the names with " - " as the separator
    const salariesString = salariesNames?.join(" / ");



    // Assurez-vous que le client sélectionné existe

        // Concaténez le libellé du client et le nom des salariés pour former le code de la mission
        const codemission = `${selectedClient?.libelle} / ${salariesString}`;


        // Mettez à jour la valeur du champ "Code Mission" avec le code de la mission
        this.myForm.patchValue({ codemission: codemission });

}
updateSelectedClient() {
  const sc =this.Clients.find((client:any)=> client.id===this.selectedclient)
  }



selectSalaries(){
  console.log(this.users.value);
}

selectClient(){
  console.log(this.clientss.value);
}

}


