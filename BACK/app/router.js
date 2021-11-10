const {Router, request, response} = require('express');
const checkJwt = require('./middlewares/checkJwt');

//import controllers
const {cardController, userController, bookmarksController, fetchUrlController, contributorController, refreshToken, verifyController} = require('./controllers');

//import middlewares
const checkRefreshToken = require('./middlewares/checkRefreshToken');

const router = Router();

//CARDS

router.route('/cards')
    .get(cardController.findAllCards) //liste de toutes les cartes, paginées par 30 dans l'ordre chronologique descendant
    .post(checkJwt, fetchUrlController.findUrl); //renseigner l'URL à fetcher pour nécessaire à l'ajout d'une carte

//ajout d'une carte, suite fetch des données Open Graph, envoi des données du formulaire et envoyer au back
router.post('/cards/save',checkJwt, cardController.save);

//lire une carte pour affichage d'une carte
router.get('/cards/:slug/:id', cardController.findById);
//lire une carte pour la modification d'une carte
router.get('/update/:id', cardController.findOneToUpdate);


//modification d'une carte
router.put('/contributor/cards/:id',checkJwt, contributorController.update);
// DELETE carte
router.delete('/cards/:id/users', checkJwt, contributorController.deleteCardById);

//résultat de recherche
router.get('/cards/search?',cardController.findQueryAllCards);

// VOIR les cartes en favoris
router.get('/users/:id/bookmarks',checkJwt, bookmarksController.findBookmarksByUserId);
// Ajout d'une carte en favoris
router.post('/cards/:id/bookmarks',checkJwt, bookmarksController.addBookmarkById);
//Delete une carte des favoris
router.delete('/users/:id/bookmarks/:id',checkJwt, bookmarksController.deleteBookmarkById);

// voir les cartes crées
router.get('/contributor/cards', checkJwt, contributorController.findByContributor);

//USERS by id
router.get('/users/:id' ,checkJwt, userController.findById);
//DELETE USER BY ID
router.delete('/users/:id' ,checkJwt, userController.deleteUserById);
//modifier un user
router.put('/users/:id' , checkJwt, userController.update);
//Accéder aux infos d'un user avec la liste des id bookmarks
router.get('/user',checkJwt, userController.getUserWithBookmarksInfo);

//LOGIN - SIGNUP
router.post('/login', userController.login);
router.post('/signup', userController.signUp);

// route pour le refresh Token
router.post('/api/refreshToken',checkRefreshToken, refreshToken.refreshToken);

//route pour vérifier la présence de données en DB avant de se rendre sur une route d'ajout de données (demandée par l'équipe front")
router.get('/verify?', verifyController.signUp);

/**
 * Une route au cas où aucune ne répond
 * 
 */
 router.use((_, response) => response.status(404).json('Endpoint non trouvé'));


module.exports = router;
