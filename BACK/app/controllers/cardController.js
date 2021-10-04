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
            const keyword = request.query.keyword;
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
            const card = await Cards.findQueryAllCards(keyword,limit,skip);
            console.log(card);
            
            
            if(card === "") {
                response.status(200).json('Pas de contenu !');
            }else {
                response.header('resultat', card.length);
                response.json({
                    page,
                    size,
                    data: card
                });
            }
            
        } catch(error) {
            console.log(error);
            response.status(500).json(error.message);
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