import { Component } from '@angular/core';
import { Country } from '@angular-material-extensions/select-country';
import { DatePipe } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from '../Models/Client';
import { ClientService } from '../Services/Client.service';
@Component({
  selector: 'app-clientview',
  templateUrl: './clientview.component.html',
  styleUrl: './clientview.component.css'
})
export class ClientviewComponent {
  selectedClient?: Client;
  myForm!: FormGroup;
  showParagraph: boolean | undefined;
  coefficientOptions: string[] = [];
  countryFormControl = new FormControl();
  countryFormGroup: FormGroup | undefined;
  currentDate: string = '';
  selectedCountry: string | undefined;
  constructor(private fb: FormBuilder, private ClientService: ClientService, private activatRoute:ActivatedRoute,private datePipe: DatePipe,private router:Router ) {this.currentDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd') || ''} // Inject SimulatorService
   id:string="";
   ville="";
   rue="";
   codePostal="";

  ngOnInit(): void {
    this.activatRoute.params.subscribe(params => {
      this.id= params['id']; // Extraire simulateurId des paramètres et le convertir en nombre
      this.loadclientDetails(this.id);
      console.log(this.id) // Appeler la méthode pour charger les détails du simulateur
    });
    this.myForm = this.fb.group({
      libelle: [''],
      numtva: [''],
      address: [''],
      pays: [''],
      ville: ['', Validators.required],
      rue: ['', Validators.required],
      codePostal: ['', Validators.required]
    });
  }

  loadclientDetails(ClientId: string): void {
    // Récupérer les détails du simulateur depuis le service
    this.ClientService.getClientById(ClientId).subscribe(
      (Client: Client) => {

        this.selectedClient = Client;
        this.myForm.patchValue({
          pays: {
            "name":this.selectedClient.pays ,
            "alpha2Code": "",
            "alpha3Code": "",
            "numericCode": "",
            "callingCode": ""
        }
        });
       const list= this.selectedClient.address.split('/')
       if(list.length>=0)
       this.ville=list[0];
       if(list.length>=1)
        this.rue=list[1];
       if(list.length>=2)
        this.codePostal=list[2];
      },
      (error: any) => {
        console.error('Erreur lors du chargement des détails du client', error);
      }
    );
  }


  updateClient(): void {
    if (this.selectedClient) {
      const id = this.selectedClient.id;
      const updatedData = {
          libelle: this.myForm.get('libelle')?.value,
          numtva: this.myForm.get('numtva')?.value,
          address: this.myForm.get('address')?.value,
          pays: this.myForm.get('pays')?.value,
      };
      if (updatedData.libelle==''){
        updatedData.libelle=this.selectedClient.libelle;
      }
      if (updatedData.numtva==''){
        updatedData.numtva=this.selectedClient.numtva;
      }
      if (updatedData.address==''){
        updatedData.address=this.selectedClient.address;
      }
      if (updatedData.pays==''){
        updatedData.pays=this.selectedClient.pays;
      }

      console.log(updatedData);
      this.ClientService.update(this.id, updatedData).subscribe(
        (response: Client) => {
          // Handle successful update response
          this.router.navigate(["/clientlist"]);
          console.log('client updated successfully:', response);


        },
        (error: any) => {
          // Handle error
          console.error('Error updating client:', error);
        }
      );
    }
  }

  onCountrySelected(country: Country) {
    const countryName = country.name;
    this.myForm.get('pays')?.setValue(countryName); // Mettre à jour l'attribut 'adresse' avec le nom du pays
    console.log(countryName);
  }

}

