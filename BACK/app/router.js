const {Router} = require('express');
const checkJwt = require('./middlewares/checkJwt');

const cardController = require('./controllers/cardController');
const userController = require('./controllers/userController');
const bookmarksController = require('./controllers/userBookmarks');
const fetchUrlController = require('./controllers/fetchUrlController');

const router = Router();

//CARDS
//liste de toutes les cartes, paginées par 30 dans l'ordre chronologique descendant
router.get('/cards', cardController.findAllCards);
//ajout ou modification de carte
router.post('/cards', cardController.save);
//résultat de recherche
router.post('/cards/?q=${keyword}&category=${category}&resource_language=${resource_language}&language=${language}&media=${type}&page=${askPage}',cardController.findQueryAllCards);

// VOIR les cartes en favoris
router.get('/users/:id/bookmarks', bookmarksController.findBookmarksByUserId);
// Ajout d'une carte en favoris
router.post('/cards/:id', bookmarksController.addBookmarkById);
//Delete une carte des favoris
router.delete('users/:id/bookmarks/:id', checkJwt);
//URL open graph pour une carte
router.post('/cards/fetch', fetchUrlController.findUrl); 

//USERS by id
router.get('/users/:id' , userController.findById);
//DELETE USER BY ID
router.delete('/user/:id' , userController.deleteUserById);
router.put('/user/:id' , userController.update);
//LOGIN - SIGNUP
router.post('/login', userController.login);
router.post('/signup', userController.signUp);

/**
 * Une route au cas où aucune ne répond
 * 
 */
 router.use((_, response) => response.status(404).json('Endpoint non trouvé'));


module.exports = router;