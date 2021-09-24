const {Router} = require('express');
const checkJwt = require('./middlewares/checkJwt');

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

//DELETE USER BY ID
//router.delete('/delete/user/:id', userController.deleteUserById);

/**
 * Une route au cas où aucune ne répond
 * 
 */
 router.use((_, response) => response.status(404).json('Endpoint non trouvé'));


module.exports = router;