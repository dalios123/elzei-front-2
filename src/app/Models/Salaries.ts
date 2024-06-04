export class Salaries {

  id: string;
  justificatif: any;
  prenom: string;
  nom: string;
  dateNaiss: string;
  adresse: string;
  matricule: string;
  numSS: string;
  dateEntre: string;
  dateSortie: string;
  emploi: string;
  statut: string;
  position: string;
  coefficient: string;
  pays: string;



  constructor(
    id: string,
    justificatif: any,
    pays: string,
    prenom: string,
    nom: string,
    dateNaiss: string,
    adresse: string,
    matricule: string,
    numSS: string,
    dateEntre: string,
    dateSortie: string,
    emploi: string,
    statut: string,
    position: string,
    coefficient: string
  ) {
    this.id = id;
    this.justificatif = justificatif;
    this.pays = pays;
    this.prenom = prenom;
    this.nom = nom;
    this.dateNaiss = dateNaiss;
    this.adresse = adresse;
    this.matricule = matricule;
    this.numSS = numSS;
    this.dateEntre = dateEntre;
    this.dateSortie = dateSortie;
    this.emploi = emploi;
    this.statut = statut;
    this.position = position;
    this.coefficient = coefficient;
  }
}
