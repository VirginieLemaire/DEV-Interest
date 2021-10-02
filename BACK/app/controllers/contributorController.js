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
    }
}

module.exports = cardsController;