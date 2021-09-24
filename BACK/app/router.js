const {Router} = require('express');

const cardController = require('./controllers/cardController');
const userController = require('./controllers/userController');

const router = Router();

router.get('/cards',cardController.findAllCards);
router.post('/cards',cardController.findQueryAllCards);

//USERS
router.get('/users/:id', userController.findById);

//LOGIN - SIGNUP
router.post('/login', userController.login);
router.post('/signup', userController.signUp);


module.exports = router;