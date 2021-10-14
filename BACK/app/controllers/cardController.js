const Cards = require('../models/card');
const jwt = require('../services/jwt');

const cardsController = {
    findAllCards: async (request, response) => {
        try {
            let {page, size} = request.query;
            if (!page) {
                page =1;
            }
            if (!size) {
                size = 30;
            }

            const limit = parseInt(size);
            const skip = (page - 1) * size;
            const card = await Cards.findAllCards(limit, skip);
            //response.setHeader('Authorization', jwt.makeToken(request.userId));
            if(card === "") {
                response.status(200).json('Pas de contenu !');
            }else {
                response.header('resultat_home_cards', card.length);
                response.json({
                    page,
                    size,
                    data: card
                });
            }
            
        } catch(error) {
            console.log(error);
            res.status(500).json(error.message);
        }
    },
    //réponse à une requête dans la barre de recherche
    findQueryAllCards: async (request, response) => {
        try {
            //mots-clefs recherchés
            const searchQuery = {
                keyword: request.query.keyword,
                tech : request.query.tech,
                category : request.query.category,
                lang : request.query.lang,
                level : request.query.level,
                type : request.query.type
            };
            console.log(searchQuery);
            console.log(`\nHello, je suis findQueryAllCards du cardController. Voici la requête reçue : ${searchQuery}`);
            
            // pagination
            let {page, size} = request.query;
            if (!page) {
                page =1;
            }
            if (!size) {
                size = 30;
            }
            //stocker la pagination dans des variables
            const limit = parseInt(size);
            const skip = (page - 1) * size;
            //envoyer les infos à la DB pour trouver les cartes
            const card = await Cards.findQueryAllCards(searchQuery,limit,skip);
            console.log("card?", card);
            if(card < "0") {
                console.log("y a rien");
                //const nothing = response.status(200).json('aucun résultat !');
                response.json({
                    page,
                    size,
                    count: 0, 
                    data: []    
                });
               
            }else {
                let resultat =  card[0].full_count;
                console.log(`\n <<<< de retour dans le controller, j'ai reçu ${resultat} cartes` );
                //envoi des infos dans le header
                response.header('resultat', resultat);
                //envoi des datas
                response.json({
                    page,
                    size,
                    count: resultat,
                    data: card
                    
                });
            }
            
        } catch(error) {
            console.log(error);
            response.status(500).json(error.message);
        }
    },
    //accéder à une carte
    findById: async (request, response) => {
        try {
            const id = parseInt(request.params.id, 10);
            const card = await Cards.findById(id);
            response.json(card);
        } catch(error) {
            console.log(error);
        }
    },
    findOneToUpdate :async (request, response) => {
        try {
            const id = parseInt(request.params.id, 10);
            const card = await Cards.findOneToUpdate(id);
            response.json(card);
        } catch(error) {
            console.log(error);
        }
    },
    //insert a card
    save : async (request, response) => {
        try {
            const card = await new Cards(request.body).save();
            //if (card) {
                //on a une valeur de retour, il s'agit d'un INSERT
                response.status(201).json(card);
            //} else {
                //pas de valeur de retour, c'était un UPDATE
            //    response.status(204).json('Update done');
            //}

        } catch(error) {
           //lire l'erreur
           console.trace(error);
           //envoyer l'info au front
           response.status(500).json(error.message);
        }
    },
    
}
module.exports = cardsController;