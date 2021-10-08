const Contributor = require("../models/contributor");
const jwt = require('../services/jwt');

const cardsController = {
    findByContributor: async (request, response) => {
        try {
            const id = request.userId;
            const user = await Contributor.findContributor(id);
            response.header('resultat_contributor', user.length);
            response.json(user);
        } catch(error) {
            console.log(error);
        }
    },
    deleteCardById: async (request, response) => {
        try {
            const user = request.userId;
            const id_card = parseInt(request.params.id,10);
            let data = {
               user: user,
                id_card : id_card,
            }
            console.log('dans controller',id_card, user);
            const card = await new Contributor(data).deleteCard();
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
            console.log("\n     *********************************\nJe suis l'update du contributorController: \n--> je récupère l'id user dans le token \n--> et l'id carte dans l'URL\n");
            const id = request.userId;
            const idCard = parseInt(request.params.id,10);

            console.log("je crée un objet ayant toutes les propriétés requises : ");
            let data = {
                id: id,
                card_id : idCard,
            };
            console.log("voici ce qui envoyé dans le body par le client", request.body);
            for (const key in request.body) {
                data[key] = request.body[key];
            }
            console.log({data});
            
            console.log("\nje passe cet objet au modèle pour l'utiliser avec la méthode update\n >>>>>> go speak with DB ;p \n");
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