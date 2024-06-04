export class Simulateur {
  id?: number;
  cout?: number;
  tjm?: number;
  qt?: number;
  factureHt?: number;
  dispo?: number;
  astreintes?: number;
  qt2?: number;
  factureHt2?: number;
  dispo2?: number;
  autres?: number;
  qt3?: number;
  factureHt3?: number;
  dispo3?: number;
  totalDISPOO?: number;
  brutAnn?: number;
  salaireBrut?: number;
  salaireNetHorsPAS?: number;
  fraisRepas?: number;
  fraisKilo?: number;
  autresFraisSurFacture?: number;
  totalPercuHorsExtra?: number;
  medecineDeTravail?: number;
  taxeDapprentissage?: number;
  adessat?: number;
  taxeCCI?: number;
  continuue?: number;
  assuranceRespCivile?: number;
  complementMutOp1?: number;
  cvaeSurCAgenere?: number;
  chargesPatronalesURSSAF?: number;
  chargesSalariales?: number;
  chargesPatronalesAnn?: number;
  CoutTotal?: number;
  solde?: number;
  TotalPerçu?: number
  extraPossibleHorsPAS?: number;
  coutTotal?: number;
  CVAEsurCAgenere?: number;
  totalPercu?: number;

  constructor(
    id?: number,
    cout?: number,
    tjm?: number,
    qt?: number,
    factureHt?: number,
    dispo?: number,
    astreintes?: number,
    qt2?: number,
    factureHt2?: number,
    dispo2?: number,
    autres?: number,
    qt3?: number,
    factureHt3?: number,
    dispo3?: number,
    totalDISPOO?: number,
    brutAnn?: number,
    salaireBrut?: number,
    salaireNetHorsPAS?: number,
    fraisRepas?: number,
    fraisKilo?: number,
    autresFraisSurFacture?: number,
    totalPercuHorsExtra?: number,
    medecineDeTravail?: number,
    taxeDapprentissage?: number,
    adessat?: number,
    taxeCCI?: number,
    continuue?: number,
    assuranceRespCivile?: number,
    complementMutOp1?: number,
    cvaeSurCAgenere?: number,
    chargesPatronalesURSSAF?: number,
    chargesSalariales?: number,
    chargesPatronalesAnn?: number,
    coutTotal?: number,
    solde?: number,
    extraPossibleHorsPAS?: number,
    CVAEsurCAgenere?: number,
    totalPercu?: number
  ) {
    this.TotalPerçu = totalPercu;
    this.CVAEsurCAgenere = CVAEsurCAgenere;
    this.coutTotal = coutTotal;
    this.extraPossibleHorsPAS = extraPossibleHorsPAS;
    this.cout = cout;
    this.tjm = tjm;
    this.qt = qt;
    this.factureHt = factureHt;
    this.dispo = dispo;
    this.astreintes = astreintes;
    this.qt2 = qt2;
    this.factureHt2 = factureHt2;
    this.dispo2 = dispo2;
    this.autres = autres;
    this.qt3 = qt3;
    this.factureHt3 = factureHt3;
    this.dispo3 = dispo3;
    this.totalDISPOO = totalDISPOO;
    this.brutAnn = brutAnn;
    this.salaireBrut = salaireBrut;
    this.salaireNetHorsPAS = salaireNetHorsPAS;
    this.fraisRepas = fraisRepas;
    this.fraisKilo = fraisKilo;
    this.autresFraisSurFacture = autresFraisSurFacture;
    this.totalPercuHorsExtra = totalPercuHorsExtra;
    this.medecineDeTravail = medecineDeTravail;
    this.taxeDapprentissage = taxeDapprentissage;
    this.adessat = adessat;
    this.taxeCCI = taxeCCI;
    this.continuue = continuue;
    this.assuranceRespCivile = assuranceRespCivile;
    this.complementMutOp1 = complementMutOp1;
    this.cvaeSurCAgenere = cvaeSurCAgenere;
    this.chargesPatronalesURSSAF = chargesPatronalesURSSAF;
    this.chargesSalariales = chargesSalariales;
    this.chargesPatronalesAnn = chargesPatronalesAnn;
    this.coutTotal = coutTotal;
    this.solde = solde;
  
  }}
