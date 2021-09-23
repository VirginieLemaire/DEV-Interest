const Cards = require('../models/card');

const cardsController = {
    findAllCards: async (req, res) => {
        try {
            let {page, size} = req.query;
            if (!page) {
                page =1;
            }
            if (!size) {
                size = 30;
            }

            const limit = parseInt(size);
            const skip = (page - 1) * size;
            const card = await Cards.findAllCards(limit, skip);
            if(card === "") {
                res.status(200).json('Pas de contenu !');
            }else {
                res.json({
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

    findQueryAllCards: async (req, res) => {
        try {
            // pagination
            let {page, size} = req.query;
            if (!page) {
                page =1;
            }
            if (!size) {
                size = 30;
            }

            const limit = parseInt(size);
            const skip = (page - 1) * size;

            const card = await Cards.findQueryAllCards(limit,skip);
            if(card === "") {
                res.status(200).json('Pas de contenu !');
            }else {
                res.json({
                    page,
                    size,
                    data: card
                });
            }
            
        } catch(error) {
            console.log(error);
            res.status(500).json(error.message);
        }
    }
}
module.exports = cardsController;