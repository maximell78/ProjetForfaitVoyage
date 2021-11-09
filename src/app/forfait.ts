export interface Forfait {
    id: number;
    destination: string;
    villeDepart: string;
    hotel: {
        nom: string;
        coordonnees: string;
        nombreEtoiles: number;
        nombreChambres: number;
        caracteristiques: string
    }
    dateDepart: string;
    dateRetour: string;
    prix: number;
    rabais: number;
    vedette: boolean
}