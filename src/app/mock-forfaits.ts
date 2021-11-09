import { Forfait } from "./forfait";

export const FORFAITS: Forfait[] = [
    {   id: 1,
        destination: 'Paris, France',
        villeDepart: 'Montréal, Québec',
        hotel: {
            nom: 'Citadines Bastille Marais Paris',
            coordonnees: '37, boulevard Richard Lenoir 75011 Paris FRANCE',
            nombreEtoiles: 3,
            nombreChambres: 138,
            caracteristiques: 'Située à 5 minutes à pied de l’animation de la place de la Bastille et à 10 minutes à pied du magnifique quartier du Marais, le Citadines Bastille Marais Paris dispose de 108 studios (1 lit double ou 2 lits simples) et 30 appartements.'
        },
        dateDepart: '2021-12-20',
        dateRetour: '2022-01-02',
        prix: 3769,
        rabais: 200,
        vedette: false
    },
    {   id: 2,
        destination: 'Kinetta, Grèce',
        villeDepart: 'Montréal, Québec',
        hotel: {
            nom: 'Kinetta Beach Resort And Spa',
            coordonnees: '57th km of Old National Road Athens Corinth - Kinetta Attica',
            nombreEtoiles: 4,
            nombreChambres: 253,
            caracteristiques: 'Situé entre Athènes et le canal de Corinthe, le Kinetta Beach est l’hôtel idéal pour des vacances de détente en bord de mer. À moins d’un km de la gare de train, vous serez en 45 minutes à peine en plein cœur d’Athènes. L’hôtel propose 253 chambres élégamment décorées.'
        },
        dateDepart: '2021-12-20',
        dateRetour: '2022-01-02',
        prix: 2549,
        rabais: 700,
        vedette: true
    },
    {   id: 3,
        destination: 'Rome, Italie',
        villeDepart: 'Montréal, Québec',
        hotel: {
            nom: 'Hotel de Petris',
            coordonnees: 'Via Rasella 142, Rome, Italie, 00187',
            nombreEtoiles: 3,
            nombreChambres: 65,
            caracteristiques: 'Pour goûter à la dolce vita, cet hôtel est idéalement situé à distance de marche de la fontaine de Trevi, des Marches espagnoles, du Panthéon et de la piazza Navona. Il compte 67 chambres confortables, agréablement décorées et offrant un cadre intime et une terrasse panoramique.'
        },
        dateDepart: '2021-12-20',
        dateRetour: '2022-01-02',
        prix: 2009,
        rabais: 0,
        vedette: false
    },
    {   id: 4,
        destination: 'Lisbone, Portugal',
        villeDepart: 'Montréal, Québec',
        hotel: {
            nom: 'Hotel Mundial',
            coordonnees: 'Largo Martim Moniz, 1100-341 Lisbone Portugal',
            nombreEtoiles: 4,
            nombreChambres: 350,
            caracteristiques: "L'Hôtel Mundial est situé au coeur de Lisbonne, près de tous les services de transport en commun."
        },
        dateDepart: '2021-12-20',
        dateRetour: '2022-01-02',
        prix: 1519,
        rabais: 100,
        vedette: true
    },
    {   id: 5,
        destination: 'Londres, Royaume-Uni',
        villeDepart: 'Montréal, Québec',
        hotel: {
            nom: 'ME London',
            coordonnees: '336-337 The Strand WC2R 1HA Londre',
            nombreEtoiles: 5,
            nombreChambres: 157,
            caracteristiques: "Situé en plein coeur du quartier West End de Londres, et entouré de théâtres, boutiques et boîtes de nuit, à environ 46 km de l'aéroport. Un hôtel avant-gardiste, il propose des vues panoramiques spectaculaires du haut de son bar sur le toit, une cuisine gastronomique internationale et des chambres modernes au design exquis, toutes avec vue sur la Tamise."
        },
        dateDepart: '2021-12-20',
        dateRetour: '2022-01-02',
        prix: 6699,
        rabais: 1100,
        vedette: true
    },
    {   id: 6,
        destination: 'Barcelone, Espagne',
        villeDepart: 'Montréal, Québec',
        hotel: {
            nom: 'Hotel Gotico',
            coordonnees: '',
            nombreEtoiles: 4,
            nombreChambres: 81,
            caracteristiques: "Description Générale: Bienvenue à l’hôtel Hotel Gotico à Barcelona-Ciutat Vella. Pour faciliter votre séjour, vous trouverez à votre disposition un hall, la climatisation, 2 ascenseurs et une réception. Le personnel de cet hôtel parle anglais, espagnol, allemand et français. L’hôtel se situe à proximité une station de train, une station de métro, d’un office de tourisme, des bars et restaurants et des arrêts d’autobus. Accessible depuis l'hôtel: Puerto de Barcelona (200 m), Las Ramblas (100 m), Town Hall (25 m) et Picasso Museum (200 m). Pour votre divertissement, l'hôtel est équipé d'un salon de télévision"
        },
        dateDepart: '2021-12-20',
        dateRetour: '2022-01-02',
        prix: 2201,
        rabais: 300,
        vedette: true
    }
]