import { Country } from '@angular-material-extensions/select-country';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Client } from '../Models/Client';
import { ClientService } from '../Services/Client.service';


@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent implements OnInit {

  Client: Client = {
    id: "",
    libelle: "",
    numtva: "",
    address: "",
    pays: "",
  }

  myForm!: FormGroup;
  showParagraph: boolean | undefined;
  coefficientOptions: string[] = [];
  constructor(private fb: FormBuilder, private ClientService: ClientService,private router:Router) {} // Inject SimulatorService

  ngOnInit(): void {
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

  updateAddress() {
    const formData = this.myForm.value;
    const ville = formData.ville;
    const rue = formData.rue;
    const codePostal = formData.codePostal;

    this.Client.address = `${ville}/${rue}/${codePostal}`;
        console.log("Adresse complète: " + this.Client.address);
  }

 submitForm(): void {
    const libelle = this.myForm.get('libelle')?.value;
    const numtva = this.myForm.get('numtva')?.value;
    const address = this.myForm.get('address')?.value;
    const pays = this.myForm.get('pays')?.value;

    console.log(libelle, numtva, address, pays);
  }


  save(): void {
    const formData = this.myForm.value;
    const ville = formData.ville;
    const rue = formData.rue;
    const codePostal = formData.codePostal;

    // Concatenate the address parts into a single address string
    const address = `${ville}/${rue}/${codePostal}`;

    const bodyData = {
      libelle: this.myForm.get('libelle')?.value,
      numtva: this.myForm.get('numtva')?.value,
      address: address,
      pays: this.myForm.get('pays')?.value,
    };

    this.ClientService.create(bodyData).subscribe(
      (res: any) => {
        console.log('Client created successfully:', res);
        this.router.navigate(["/clientlist"]);
      },
      (error: any) => {
        console.error('Error occurred while creating Client:', error);
      }
    );
  }

  onCountrySelected(country: Country) {
    const countryName = country.name;
    this.myForm.get('pays')?.setValue(countryName); // Mettre à jour l'attribut 'adresse' avec le nom du pays
    console.log(countryName);
  }




}

