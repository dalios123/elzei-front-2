import { Country } from '@angular-material-extensions/select-country';
import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Salaries } from '../Models/Salaries';
import { SalariesService } from '../Services/Salaries.service';

@Component({
  selector: 'app-salaries',
  templateUrl: './salaries.component.html',
  styleUrls: ['./salaries.component.css'],

})
export class SalariesComponent implements OnInit {
  countries: any[] = [];



  Salaries: Salaries = {
    id: "",
    pays: "",
    prenom: "",
    nom: "",
    dateNaiss: "",
    adresse: "",
    matricule: "",
    numSS: "",
    dateEntre: "",
    dateSortie: "",
    emploi: "",
    statut: "",
    position: "",
    coefficient: "",
    justificatif: "",
  }


  searchText: string = '';

  myForm!: FormGroup;
  showParagraph: boolean | undefined;

  countryFormControl = new FormControl();
  countryFormGroup: FormGroup | undefined;
  currentDate: string = '';
  coefficientOptions: any[] = [];

  constructor(private fb: FormBuilder, private SalariesService: SalariesService, private datePipe: DatePipe, private router: Router) {
    this.currentDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd') || ''}

  ngOnInit(): void {





    this.myForm = this.fb.group({
      prenom: [''],
      nom: [''],
      dateNaiss: [''],
      adresse: [''],
      matricule: [''],
      numSS: [''],
      dateEntre: [''],
      dateSortie: [''],
      emploi: [''],
      statut: [''],
      position: [''],
      coefficient: [''],
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

    this.Salaries.adresse = `${ville}/${rue}/${codePostal}`;
        console.log("Adresse complète: " + this.Salaries.adresse);
  }


 submitForm(): void {
    const prenom = this.myForm.get('prenom')?.value;
    const nom = this.myForm.get('nom')?.value;
    const dateNaiss = this.myForm.get('dateNaiss')?.value;
    const adresse = this.myForm.get('adresse')?.value;
    const matricule = this.myForm.get('matricule')?.value;
    const numSS = this.myForm.get('numSS')?.value;
    const dateEntre = this.myForm.get('dateEntre')?.value;
    const dateSortie = this.myForm.get('dateSortie')?.value;
    const emploi = this.myForm.get('emploi')?.value;
    const statut = this.myForm.get('statut')?.value;
    const position = this.myForm.get('position')?.value;
    const coefficient = this.myForm.get('coefficient')?.value;
    const pays = this.myForm.get('pays')?.value;


    console.log(prenom, nom, dateNaiss, adresse, matricule, numSS, dateEntre, dateSortie, emploi, statut, position, coefficient,pays);
  }


  updateCoefficient(event: any) {
    const value = event.target.value;
    let coefficientValue = '';
    let paragraph = "";

    switch (value) {
        case '1.1':
            coefficientValue = '95';
            paragraph = "Collaborateurs assimilés à des ingénieurs ou cadres, occupant un poste où ils mettent en œuvre des connaissances acquises";
            break;
        case '1.2':
            coefficientValue = '100';
            paragraph = "Comme 1.1., mais titulaires du diplôme de sortie des écoles visées dans la définition des ingénieurs à l\'article 2-c de la CCN";
            break;
        case '2.2':
            coefficientValue = '130';
            paragraph = "Remplissent les conditions de la position 2.1 et, en outre, partant d'instructions précises de leur supérieur, doivent prendre des initiatives et assumer des responsabilités que nécessite la réalisation de ces instructions ; étudient des projets courants et peuvent participer à leur exécution. Ingénieurs d'études ou de recherches, mais sans fonction de commandement";
            break;
        case '2.3':
            coefficientValue = '150';
            paragraph = "Ont au moins 6 ans de pratique en cette qualité et étant en pleine possession de leur métier ; partant des directives données par leur supérieur, ils doivent avoir à prendre des initiatives et assumer des responsabilités pour diriger les employés, techniciens ou ingénieurs travaillant à la même tâche";
            break;
        case '3.1':
            coefficientValue = '170';
            paragraph = "Placés généralement sous les ordres d'un chef de service et qui exercent des fonctions dans lesquelles ils mettent en œuvre non seulement des connaissances équivalant à celles sanctionnées par un diplôme, mais aussi des connaissances pratiques étendues sans assurer dans leurs fonctions une responsabilité complète et permanente (qui revient en fait à leur chef)";
            break;
        case '3.2':
            coefficientValue = '210';
            paragraph = "Doivent prendre les initiatives et les responsabilités qui découlent de leurs fonctions, en suscitant, orientant et contrôlant le travail de leurs subordonnés. Cette position implique un commandement sur des collaborateurs et cadres de toute nature";
            break;
        case '3.3':
            coefficientValue = '270';
            paragraph = "L'occupation de ce poste, qui entraîne de très larges initiatives et responsabilités et la nécessité d'une coordination entre plusieurs services, exige une grande valeur technique ou administrative";
            break;
          case '2.1':
            this.coefficientOptions = ['105 (<26 ans)', '115 (>26 ans)'];
            paragraph = "Ont au moins 2 ans de pratique de la profession et des qualités intellectuelles et humaines leur permettant de se mettre rapidement au courant des travaux d'études. Coordonnent éventuellement les travaux de techniciens agents de maîtrise dessinateurs ou employés, travaillant aux mêmes tâches qu'eux dans les corps d'état étudiés par le bureau d'études";
            break;
        default:
            break;
    }

    this.myForm.get('coefficient')?.setValue(coefficientValue);
    this.myForm.get('statut')?.setValue(paragraph);
    // Assurez-vous de ne définir la valeur que si le tableau coefficientOptions est non vide


    }





  save(): void {
    const formData = this.myForm.value;
    const ville = formData.ville;
    const rue = formData.rue;
    const codePostal = formData.codePostal;
    const adresse = `${ville}/${rue}/${codePostal}`;

    const bodyData = {
      prenom: this.myForm.get('prenom')?.value,
      nom: this.myForm.get('nom')?.value,
      dateNaiss: this.myForm.get('dateNaiss')?.value,
      adresse: adresse,
      matricule: this.myForm.get('matricule')?.value,
      numSS: this.myForm.get('numSS')?.value,
      dateEntre: this.myForm.get('dateEntre')?.value,
      dateSortie: this.myForm.get('dateSortie')?.value,
      emploi: this.myForm.get('emploi')?.value,
      statut: this.myForm.get('statut')?.value,
      position: this.myForm.get('position')?.value,
      coefficient: this.myForm.get('coefficient')?.value,
      pays: this.myForm.get('pays')?.value,


    };
console.log(bodyData);
    this.SalariesService.create(bodyData).subscribe(
      (res: any) => {
        console.log(bodyData);
        console.log('Salary created successfully:', res);
        this.router.navigate(["/search"]);

      },
      (error: any) => {
        console.error('Error occurred while creating salary:', error);
      }
    );
  }


  onCountrySelected(country: Country) {
    const countryName = country.name;
    this.myForm.get('pays')?.setValue(countryName); // Mettre à jour l'attribut 'adresse' avec le nom du pays
    console.log(countryName);
  }


}
