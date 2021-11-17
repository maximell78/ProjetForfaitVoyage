export interface Forfaits {
    id: number;
    destination: string;
    villeDepart: string;
    hotel: {
        nom: string;
        coordonnees: string;
        nombreEtoiles: number;
        nombreChambres: string;
        caracteristiques: string;
        avis: string
    }
    dateDepart: string;
    duree: string;
    prix: string;
    rabais: string;
    nouveauPrix: string;
    vedette: boolean
}