import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Mission } from '../Models/Mission';
import { MissionService } from '../Services/Mission.service';
import { SalariesService } from '../Services/Salaries.service';

import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from '../Models/Client';
import { Salaries } from '../Models/Salaries';
import { ClientService } from '../Services/Client.service';


@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrl: './mission.component.css'
})
export class MissionComponent implements OnInit {

  users = new FormControl([]);
  clientss = new FormControl([]);

  currentDate: string = '';
    Mission: Mission = {
      id: "",
      codemission:"",
      datedebut: "",
      datefin: "",
      tjm: "",
      clientid:"",
      salariesid:"",

    }

    myForm!: FormGroup;
    showParagraph: boolean | undefined;
    coefficientOptions: string[] = [];

    constructor(private fb: FormBuilder, private SalariesService: SalariesService, private ClientService: ClientService,  private MissionService: MissionService , private activatedRoute: ActivatedRoute ,
      private router: Router,private http: HttpClient, private datePipe: DatePipe) {this.currentDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd') || ''} // Inject SimulatorService
      Clients:any;
      Salariess:any;
      selectedClient: Client | undefined;
      selectedSalaries: Salaries | undefined;
      ClinetId: any;
      SalariesId: any;


      ngOnInit(): void {
        this.myForm = this.fb.group({
          datedebut: [''],
          datefin: [''],
          tjm: [''],
          clientid: [''],
          salariesid: [''],
          codemission: [''] // Ajoutez ce champ pour le code de la mission
        });
        this.listClient();
        this.listSalaries();
      }


    selectedclient:string="";
    selectedsalaries:string="";

      save(): void {
        // Récupérer les valeurs des champs du formulaire
        const formData = this.myForm.value;

        // Créer l'objet de données à envoyer au backend
        const bodyData = {
          id: formData.id,
          datedebut: formData.datedebut,
          datefin: formData.datefin,
          tjm: formData.tjm,
          codemission: formData.codemission+" / "+formData.datedebut+" / "+formData.tjm,


          clientid: {
            id: formData.clientid,
          },
          salariesid:this.users?.value?.map(user => ({ id: user }))
        };

        // Envoyer les données au backend
        console.log(bodyData);
        this.MissionService.create(bodyData).subscribe(
          (res: any) => {
            console.log('Mission created successfully:', res);
            this.router.navigate(["/missionlist"]);

          },
          (error: any) => {
            console.error('Error occurred while creating Mission:', error);
          }

        );
      }

      listClient() {
        this.ClientService.getClients().subscribe((res: any) => {
          this.Clients = res;
        });
      }


      listSalaries() {
        this.SalariesService.getSalariess().subscribe((res: any) => {
          this.Salariess = res;
        });
      }


fillCode(): void {
    // Récupérez les valeurs sélectionnées des combobox
    const selectedClientLibelle = this.myForm.get('clientid')?.value;
    const selectedSalariesNom = this.users?.value;
    console.log(this.Clients);
    console.log("2"+selectedSalariesNom);


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
    console.log(this.Clients[0].id);
    console.log(selectedClientLibelle);


    // Assurez-vous que le client sélectionné existe

        // Concaténez le libellé du client et le nom des salariés pour former le code de la mission
        const codemission = `${selectedClient?.libelle} / ${salariesString}`;
        console.log(codemission);

        // Mettez à jour la valeur du champ "Code Mission" avec le code de la mission
        this.myForm.patchValue({ codemission: codemission });
}

updateSelectedClient() {
const sc =this.Clients.find((client:any)=> client.id===this.selectedClient)
}


selectSalaries(){
  console.log(this.users.value);
}

    }
