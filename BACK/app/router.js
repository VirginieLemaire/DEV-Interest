const {Router} = require('express');
const cardsController = require('./controllers/cardController');

const router = Router();

router.get('/cards',cardsController.findAllCards);
router.post('/cards',cardsController.findQueryAllCards);

module.exports = router;