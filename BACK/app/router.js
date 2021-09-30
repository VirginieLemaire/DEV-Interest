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
//ajout d'une carte
    //1. renseigner l'URL et fetcher les infos open graph
    router.post('/cards', fetchUrlController.findUrl);
    //2. remplir le formulaire et envoyer au back
    router.post('/cards/save', cardController.save);
//modification d'une carte
router.post('/cards/:id', cardController.save);

//résultat de recherche
router.get('/cards/search?',cardController.findQueryAllCards);

// VOIR les cartes en favoris
router.get('/users/:id/bookmarks', bookmarksController.findBookmarksByUserId);
// Ajout d'une carte en favoris
router.post('/cards/:id/bookmarks', checkJwt, userController.getInfos,bookmarksController.addBookmarkById);
//Delete une carte des favoris
router.delete('users/:id/bookmarks/:id', checkJwt);

//USERS by id
router.get('/users/:id' , userController.findById);
//DELETE USER BY ID
router.delete('/users/:id' , userController.deleteUserById);
router.put('/users/:id' , userController.update);

//LOGIN - SIGNUP
router.post('/login', userController.login);
router.post('/signup', userController.signUp);

/**
 * Une route au cas où aucune ne répond
 * 
 */
 router.use((_, response) => response.status(404).json('Endpoint non trouvé'));


module.exports = router;
