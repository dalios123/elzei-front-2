export class MonthlyData {
  id: string;
  missionid: any;
  salariesid: any;
  crasid: any;
  facture: any;
  autre: string;
  totalPercu: any;
  cout: string;
  fraisrepas: string;
  fraiskilo: string;
  chargesalarial: string;
  chargeannexe: string;

  constructor(
    id: string,
    missionid: any,
    salariesid: any,
    crasid: any,
    facture: string,
    autre: string,
    totalPercu: string,
    cout: string,
    fraisrepas: string,
    fraiskilo: string,
    chargesalarial: string,
    chargeannexe: string,
  ) {
    this.id = id;
    this.missionid = missionid;
    this.salariesid = salariesid;
    this.crasid = crasid;
    this.facture = facture;
    this.autre = autre;
    this.totalPercu = totalPercu;
    this.cout = cout;
    this.fraisrepas = fraisrepas;
    this.fraiskilo = fraiskilo;
    this.chargesalarial = chargesalarial;
    this.chargeannexe = chargeannexe;

  }
}
