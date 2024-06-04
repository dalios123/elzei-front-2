export class Mission {
    id: string;
    datedebut: string;
    datefin: string;
    tjm: string;
    codemission: string;
    clientid: any;
    salariesid: any;

    constructor(
      id: string,
      codemission: string,
      datedebut: string,
      datefin: string,
      tjm: string,
      clientid: any,
      salariesid: any,

    ) {
      this.id = id;
      this.codemission = codemission;
      this.datedebut = datedebut;
      this.datefin = datefin;
      this.tjm = tjm;
      this.clientid = clientid;
      this.salariesid = salariesid;
    }
  }
