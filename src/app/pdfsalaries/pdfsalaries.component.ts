
import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Salaries } from '../Models/Salaries';
import { SalariesService } from '../Services/Salaries.service';
@Component({
  selector: 'app-pdfsalaries',
  templateUrl: './pdfsalaries.component.html',
  styleUrl: './pdfsalaries.component.css'
})
export class PdfsalariesComponent {
  employeeForm!: FormGroup; // Define FormGroup
  selectedSalaries?: Salaries;
  myForm!: FormGroup;
  countryFormControl = new FormControl();
  countryFormGroup: FormGroup | undefined;
  currentDate: string = '';
  coefficientOptions: any[] = [];
  selectedCountry: string ="";
  pdfs:any[] = [];
  constructor(private fb: FormBuilder , private activatRoute:ActivatedRoute , private router: Router, private salariesService: SalariesService,private datePipe: DatePipe) {
    this.currentDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd') || '';

  }



  ngOnInit(): void {
    this.activatRoute.params.subscribe(params => {
      const SalariesId = +params['id']; // Extraire simulateurId des paramètres et le convertir en nombre
      this.loadsalariesDetails(SalariesId); // Appeler la méthode pour charger les détails du simulateur
    });
    this.myForm = this.fb.group({
      prenom: [''],
      nom: [''],
      dateNaiss: [''],
      adresse: [''],
      pays: [''],
      matricule: [''],
      numSS: [''],
      dateEntre: [''],
      dateSortie: [''],
      emploi: [''],
      statut: [''],
      position: [''],
      coefficient: [''],
    });
  }

  loadsalariesDetails(SalariesId: number): void {
    // Récupérer les détails du simulateur depuis le service
    this.salariesService.getSalariesById(SalariesId).subscribe(
      (Salaries: Salaries) => {
        this.selectedSalaries = Salaries;
        this.salariesService.getPdfs().subscribe((res:any[])=>{
          console.log(res)
          this.pdfs = res.filter((salaries)=>salaries.matricule==this.selectedSalaries?.matricule)
          console.log(this.pdfs)
          },(error)=>{
            console.log(error)
            })
      },
      (error: any) => {
        console.error('Erreur lors du chargement des détails du simulateur', error);
      }
    );
  }
  onCountrySelected(country: string) {
    this.selectedCountry = country;
    /*const countryName = country.name;*/
    this.myForm.get('pays')?.setValue(country); // Mettre à jour l'attribut 'adresse' avec le nom du pays
    console.log(country);
  }

  countries = [
    { value: 'usa', viewValue: 'USA' },
    { value: 'canada', viewValue: 'Canada' },
    { value: 'mexico', viewValue: 'Mexico' },
    { value: 'France', viewValue: 'France' },


  ];

  updateSalary(): void {
    if (this.selectedSalaries) {
      const id = this.selectedSalaries.id;
      const updatedData = {

          prenom: this.myForm.get('prenom')?.value,
          nom: this.myForm.get('nom')?.value,
          dateNaiss: this.myForm.get('dateNaiss')?.value,
          adresse: this.myForm.get('adresse')?.value,
          pays: this.myForm.get('pays')?.value,
          matricule: this.myForm.get('matricule')?.value,
          numSS: this.myForm.get('numSS')?.value,
          dateEntre: this.myForm.get('dateEntre')?.value,
          dateSortie: this.myForm.get('dateSortie')?.value,
          emploi: this.myForm.get('emploi')?.value,
          statut: this.myForm.get('statut')?.value,
          position: this.myForm.get('position')?.value,
          coefficient: this.myForm.get('coefficient')?.value,
        /* Construct the updated data object here */
      };
      if (updatedData.prenom==''){
        updatedData.prenom=this.selectedSalaries.prenom;
      }
      if (updatedData.nom==''){
        updatedData.nom=this.selectedSalaries.nom;
      }
      if (updatedData.adresse==''){
        updatedData.adresse=this.selectedSalaries.adresse;
      }
      if (updatedData.pays==''){
        updatedData.pays=this.selectedSalaries.pays;
      }
      if (updatedData.dateNaiss==''){
        updatedData.dateNaiss=this.selectedSalaries.dateNaiss;
      }
      if (updatedData.dateEntre==''){
        updatedData.dateEntre=this.selectedSalaries.dateEntre;
      }
      if (updatedData.dateSortie==''){
        updatedData.dateSortie=this.selectedSalaries.dateSortie;
      }
      if (updatedData.emploi==''){
        updatedData.emploi=this.selectedSalaries.emploi;
      }
      if (updatedData.statut==''){
        updatedData.statut=this.selectedSalaries.statut;
      }
      if (updatedData.position==''){
        updatedData.position=this.selectedSalaries.position;
      }
      if (updatedData.matricule==''){
        updatedData.matricule=this.selectedSalaries.matricule;
      }
      if (updatedData.coefficient==''){
        updatedData.coefficient=this.selectedSalaries.coefficient;
      }

      console.log(updatedData);
      this.salariesService.update(id, updatedData).subscribe(
        (response: Salaries) => {
          // Handle successful update response
          console.log('Salary updated successfully:', response);
          this.router.navigate(["/search"]);

        },
        (error: any) => {
          // Handle error
          console.error('Error updating salary:', error);
        }
      );
    }
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

  }

