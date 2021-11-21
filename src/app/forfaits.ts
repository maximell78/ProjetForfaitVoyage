export interface Forfaits {
    id: number;
    destination: string;
    villeDepart: string;
    hotel: {
        nom: string;
        coordonnees: string;
        nombreEtoiles: number;
        nombreChambres: string;
        description: string;
        caracteristiques: any;
        avis: string
    }
    dateDepart: string;
    duree: string;
    prix: string;
    rabais: string;
    affichageRabais: boolean;
    nouveauPrix: string;
    vedette: boolean
}