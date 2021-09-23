const Cards = require('../models/card');

const cardsController = {
    findAllCards: async (req, res) => {
        try {

            const card = await Cards.findAllCards();
            if(card === "") {
                res.status(200).json('Pas de contenu !');
            }else {
                res.json(card);
            }
            
        } catch(error) {
            console.log(error);
            res.status(500).json(error.message);
        }
    },

    findQueryAllCards: async (req, res) => {
        try {
            let skip = req.query.skip;
            let limit = 30;
            
            const card = await Cards.findAllCards(limit,skip);
            if(card === "") {
                res.status(200).json('Pas de contenu !');
            }else {
                res.json(card);
            }
            
        } catch(error) {
            console.log(error);
            res.status(500).json(error.message);
        }
    }
}
module.exports = cardsController;