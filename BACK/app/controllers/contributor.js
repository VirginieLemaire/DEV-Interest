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
    }
}

module.exports = cardsController;