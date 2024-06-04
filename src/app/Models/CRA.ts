export class CRA {

    id: string;
    mois: string;
    nbjour: string;
    missionid: string;
    montantH: string;
    montantTTC: string;

    constructor(
      id: string,
      mois: string,
      nbjour: string,
      missionid: string,
      montantH: string,
      montantTTC: string,

    ) {
      this.id = id;
      this.mois = mois;
      this.nbjour = nbjour;
      this.missionid = missionid;
      this.montantH = montantH;
      this.montantTTC = montantTTC;


    }
  }
