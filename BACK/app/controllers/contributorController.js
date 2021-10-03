const Contributor = require("../models/contributor");
const jwt = require('../services/jwt');

const cardsController = {
    findByContributor: async (request, response) => {
        try {
            const id = request.userId;
            const user = await Contributor.findContributor(id);
            response.json(user);
        } catch(error) {
            console.log(error);
        }
    },
    deleteCardById: async (request, response) => {
        try {
            const id = request.userId;
            const id_card = parseInt(request.params.id,10);
            console.log('dans controller',id_card, id);
            const card = await new Contributor(id).deleteCard(id_card);
            response.status(201).json({success: true});

        } catch(error) {
           //lire l'erreur
           console.trace(error);
           //envoyer l'info au front
           response.status(500).json(error.message);
        }
    },
    //update a card
    update : async (request, response) => {
        try {
            console.log("j'arrive dans le controller: \n-> je récupère l'id user dans le token \n-> et l'id carte dans l'URL");
            const id = request.userId;
            const idCard = parseInt(request.params.id,10);

            console.log("je crée un objet ayant toutes les propriétés requises");
            let data = {
                id: id,
                card_id : idCard,
            };
            for (const key in request.body) {
                data[key] = request.body[key];
            }
            console.log({data});
            
            console.log("je passe cet objet au modèle pour l'utiliser avec la méthode update");
            const card = await new Contributor(data).update();
            response.status(201).json(card);


        } catch(error) {
           //lire l'erreur
           console.trace(error);
           //envoyer l'info au front
           response.status(500).json(error.message);
        }
    }

}

module.exports = cardsController;