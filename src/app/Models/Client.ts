export class Client {

    id: string;
    libelle: string;
    numtva: string;
    address: string;
    pays: string;

  
    constructor(
      id: string,
      libelle: string,
      numtva: string,
      address: string,
      pays: string,
     
    ) {
      this.id = id;
      this.libelle = libelle;
      this.numtva = numtva;
      this.address = address;
      this.pays = pays;
     
    }
  }
  