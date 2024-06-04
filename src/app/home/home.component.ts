import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Simulateur } from '../Models/Simulateur.model';
import { SimulateurService } from '../Services/Simulateur.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  Simulateur : Simulateur = {
    id:0,
    cout:0,
    tjm:0,
    qt:0,
    factureHt:0,
    dispo:0,
    astreintes:0,
    qt2:0,
    factureHt2:0,
    dispo2:0,
    autres:0,
    qt3:0,
    factureHt3:0,
    dispo3:0,
    totalDISPOO:0,
     brutAnn :0,
     salaireBrut :0,
     salaireNetHorsPAS:0,
     fraisRepas:0,
     fraisKilo:0,
     autresFraisSurFacture:0,
     totalPercuHorsExtra:0,
     medecineDeTravail:0,
     taxeDapprentissage :0,
     adessat:0,
     taxeCCI:0,
     continuue:0,
     assuranceRespCivile:0,
     complementMutOp1:0,
     cvaeSurCAgenere:0,
     chargesPatronalesURSSAF:0,
     chargesSalariales:0,
     chargesPatronalesAnn:0,
    solde:0,
    totalPercu:0,
    extraPossibleHorsPAS:0,


   }

  myForm!: FormGroup;
  MyService: any;
  http: any;

  constructor(private fb: FormBuilder,private SimulateurService: SimulateurService,private router:Router) {} // Inject SimulatorService

  ngOnInit(): void {
    this.myForm = this.fb.group({
      tjm: [''],
      qt: [''],
      factureht: [''],
      dispo: [''],
      cout: [''],
      Astreintes: [''],
      qt2: [''],
      factureht2: [''],
      dispo2: [''],
      Autres: [''],
      qt3: [''],
      factureht3: [''],
      dispo3: [''],
      totalDISPOO: [''],
      BrutAnn: [''],
      SalaireBrut: [''],
      SalaireNetHorsPAS: [''],
      FraisRepas: [''],
      FraisKilo: [''],
      totalPercuHorsExtra: [''],
      MedécinedeTravail: [''],
      taxeDapprentissage: [''],
      Adessat: [''],
      taxeCCI: [''],
      AssuranceRespCivile: [''],
      ComplémMutOp1: [''],
      cvaeSurCAgenere: [''],
      chargesPatronalesURSSAF: [''],
      chargesSalariales: [''],
      chargesPatronalesAnn: [''],
      CoutTotal: [''],
      continuue: [''],
      solde: [''],
      totalPercu: [''],
      extraPossibleHorsPAS: [''],
      Autresfraissurfacture: [''],

    });
  }





  submitForm(): void {
    const tjm = this.myForm.get('tjm')?.value;
    const qt = this.myForm.get('qt')?.value;
    const factureht = this.myForm.get('factureht')?.value;
    const dispo = this.myForm.get('dispo')?.value;
    const cout = this.myForm.get('cout')?.value;
    const Astreintes  = this.myForm.get('Astreintes')?.value;
    const qt2 = this.myForm.get('qt2')?.value;
    const factureht2 = this.myForm.get('factureht2')?.value;
    const dispo2 = this.myForm.get('dispo2')?.value;
    const Autres  = this.myForm.get('Autres')?.value;
    const qt3 = this.myForm.get('qt3')?.value;
    const factureht3 = this.myForm.get('factureht3')?.value;
    const dispo3 = this.myForm.get('dispo3')?.value;
    const totalDISPOO = this.myForm.get('totalDISPOO')?.value;

    const BrutAnn = this.myForm.get('BrutAnn')?.value;
    const SalaireBrut = this.myForm.get('SalaireBrut')?.value;
    const SalaireNetHorsPAS = this.myForm.get('SalaireNetHorsPAS')?.value;
    const FraisRepas = this.myForm.get('FraisRepas')?.value;
    const FraisKilo = this.myForm.get('FraisKilo')?.value;
    const Autresfraissurfacture = this.myForm.get('Autresfraissurfacture')?.value;
    const totalPercuHorsExtra = this.myForm.get('totalPercuHorsExtra')?.value;
    const MedécinedeTravail = this.myForm.get('MedécinedeTravail')?.value;
    const taxeDapprentissage = this.myForm.get('taxeDapprentissage')?.value;

    const taxeCCI = this.myForm.get('taxeCCI')?.value;
    const continuue = this.myForm.get('continuue')?.value;
    const AssuranceRespCivile = this.myForm.get('AssuranceRespCivile')?.value;
    const ComplémMutOp1 = this.myForm.get('ComplémMutOp1')?.value;
    const cvaeSurCAgenere = this.myForm.get('cvaeSurCAgenere')?.value;
    const chargesPatronalesURSSAF = this.myForm.get('chargesPatronalesURSSAF')?.value;
    const chargesSalariales = this.myForm.get('chargesSalariales')?.value;
    const chargesPatronalesAnn = this.myForm.get('chargesPatronalesAnn')?.value;
    const CoutTotal = this.myForm.get('CoutTotal')?.value;
    const extraPossibleHorsPAS = this.myForm.get('extraPossibleHorsPAS')?.value;
    const solde = this.myForm.get('solde')?.value;
    const Adessat = this.myForm.get('Adessat')?.value;



//les formules de ecrant1
const result1: number = tjm * qt;
const result2: number = result1 * (1 - (cout / 100));
const result3: number = Astreintes * qt2;
const result4: number = result3 * (1 - (cout / 100));
const result5: number = Autres * qt3;
const result6: number = result5 * (1 - (cout / 100));
const result7: number = dispo + dispo2 + dispo3;

// outputs1
    this.myForm.get('factureht')?.setValue(result1);
    this.myForm.get('dispo')?.setValue(result2);
    this.myForm.get('factureht2')?.setValue(result3);
    this.myForm.get('dispo2')?.setValue(result4);
    this.myForm.get('factureht3')?.setValue(result5);
    this.myForm.get('dispo3')?.setValue(result6);
    this.myForm.get('totalDISPOO')?.setValue(result7);



//les formules de ecrant2
    const var1: number = Number(BrutAnn)/12;
    const var2: number = Number(SalaireNetHorsPAS) + Number(FraisRepas) + Number(FraisKilo) + Number(Autresfraissurfacture) ;
    const result8: number = 0.0044 *var1;
    const result9: number =0.0002*var1;
    const result10: number =0.0173*var1;
    const result11: number = 0.01*var1;
    const var6: number = Number(tjm)*210*0.0075/12;
    const var3: number =Number(MedécinedeTravail)+Number(result8)+Number(result9)+Number(result10)+Number(result11)+Number(AssuranceRespCivile)+Number(ComplémMutOp1)+Number(var6);
    const var4: number = Number(var3)+Number(chargesSalariales)+Number(chargesPatronalesURSSAF)+Number(SalaireNetHorsPAS)+Number(FraisRepas)+Number(FraisKilo)+Number(Autresfraissurfacture);


    const result12: number = Number(result2)-Number(var4);
    const var5: number = Number(result12)*0.512;
    const result13: number = Number(var2)+Number(var5);

// outputs2
    this.myForm.get('SalaireBrut')?.setValue(var1);
    this.myForm.get('totalPercuHorsExtra')?.setValue(var2);
    this.myForm.get('taxeDapprentissage')?.setValue(result8);
    this.myForm.get('Adessat')?.setValue(result9);
    this.myForm.get('taxeCCI')?.setValue(result10);
    this.myForm.get('continuue')?.setValue(result11);
    this.myForm.get('chargesPatronalesAnn')?.setValue(var3);
    this.myForm.get('cvaeSurCAgenere')?.setValue(var6);
    this.myForm.get('CoutTotal')?.setValue(var4);
    this.myForm.get('solde')?.setValue(result12);
    this.myForm.get('extraPossibleHorsPAS')?.setValue(var5);
    this.myForm.get('totalPercu')?.setValue(result13);

  }

save() :void{

  const tjmValue = this.myForm.get('tjm')?.value;
  if (!tjmValue) {
    alert("Le champ TJM ne doit pas être vide !");
    return; // Arrêtez l'exécution de la méthode si le champ est vide
  }


   const  bodyData= {

       id :this.Simulateur.id,
       cout :this.myForm.get('cout')?.value,
       tjm :this.myForm.get('tjm')?.value,
       qt :this.myForm.get('qt')?.value,
       factureHt :this.myForm.get('factureht')?.value,
       dispo :this.myForm.get('dispo')?.value,
       astreintes : this.myForm.get('Astreintes')?.value,
       qt2 :this.myForm.get('qt2')?.value,
       factureHt2 :this.myForm.get('factureht2')?.value,
       dispo2: this.myForm.get('dispo2')?.value,
       autres:this.myForm.get('Autres')?.value,
       qt3:this.myForm.get('qt3')?.value,
       factureHt3 : this.myForm.get('factureht3')?.value,
       dispo3 :this.myForm.get('dispo3')?.value,
       CoutTotal :this.myForm.get('CoutTotal')?.value,


       brutAnn :this.myForm.get('BrutAnn')?.value ,
       salaireBrut :this.myForm.get('SalaireBrut')?.value ,
       salaireNetHorsPAS :this.myForm.get('SalaireNetHorsPAS')?.value,
       fraisRepas :this.myForm.get('FraisRepas')?.value,
       fraisKilo :this.myForm.get('FraisKilo')?.value,
       autresFraisSurFacture :this.myForm.get('Autresfraissurfacture')?.value,
       totalPercuHorsExtra : this.myForm.get('totalPercuHorsExtra')?.value,
       medecineDeTravail : this.myForm.get('MedécinedeTravail')?.value,
       taxeDapprentissage  :this.myForm.get('taxeDapprentissage')?.value ,
       adessat: this.myForm.get('Adessat')?.value,
       taxeCCI : this.myForm.get('taxeCCI')?.value,
       continuue : this.myForm.get('continuue')?.value,
       assuranceRespCivile :this.myForm.get('AssuranceRespCivile')?.value,
       complementMutOp1 :this.myForm.get('ComplémMutOp1')?.value,
       cvaeSurCAgenere :this.myForm.get('cvaeSurCAgenere')?.value,
       chargesPatronalesURSSAF :this.myForm.get('chargesPatronalesURSSAF')?.value,
       chargesSalariales :this.myForm.get('chargesSalariales')?.value,
       chargesPatronalesAnn :this.myForm.get('chargesPatronalesAnn')?.value,
       totalDISPOO :this.myForm.get('totalDISPOO')?.value,


       solde :this.myForm.get('solde')?.value,
       totalPercu :this.myForm.get('totalPercu')?.value,
       extraPossibleHorsPAS :this.myForm.get('extraPossibleHorsPAS')?.value,

    }

    this.SimulateurService.create(bodyData).subscribe((res) => {
      console.log('simulateur:', res);
      console.log('simulateur:', bodyData);
      this.router.navigate(["/list"]);
    },(error) => {
      console.error('Erreur lors de la création du Simulateur', error);
    }
  );
}

}
