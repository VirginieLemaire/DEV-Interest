const {Router, request, response} = require('express');
//import middlewares
const checkRefreshToken = require('./middlewares/checkRefreshToken');
const checkJwt = require('./middlewares/checkJwt');

//import controllers
const cardController = require('./controllers/cardController');
const userController = require('./controllers/userController');
const bookmarkController = require('./controllers/bookmarkController');
const fetchUrlController = require('./controllers/fetchUrlController');
const contributorController = require('./controllers/contributorController');
const refreshToken = require('./controllers/refreshToken');
const verifyController = require('./controllers/verifyController');

const router = Router();


// ************** CARDS *******************
// ---- CREATE ---- 
/**
 * Create a new ressource (card)
 * 
 */
router.post('/cards/save',checkJwt, cardController.save);
// Ajout d'une carte en favoris
router.post('/cards/:id/bookmarks',checkJwt, bookmarkController.addBookmarkById);

// ----  READ ---- 
/**
 * list of all cards with custom pagination (default is 30 cards per page, ordre by date of creation descendant).
 * Access : all visitors
 * 
 */
router.get('/cards', cardController.findAllCards);
//lire une carte depuis la vue "cards" pour un simple affichage (vue nécessaire au front avec les données en texte)
router.get('/cards/:slug/:id', cardController.findById);
//lire une carte pour la modification d'une carte
router.get('/update/:id', cardController.findOneToUpdate);
//résultat de recherche
router.get('/cards/search?',cardController.findQueryAllCards);
// VOIR les cartes en favoris
router.get('/users/:id/bookmarks',checkJwt, bookmarkController.findBookmarksByUserId);
// voir les cartes crées
router.get('/contributor/cards', checkJwt, contributorController.findByContributor);

// ---- UPDATE ---- 
//modification d'une carte (nécessite d'être le contributeur de la carte)
router.put('/contributor/cards/:id',checkJwt, contributorController.update);

// ---- DELETE ---- 
//suppression d'une carte (nécessite d'être le contributeur de la carte)
router.delete('/cards/:id/users', checkJwt, contributorController.deleteCardById);
//Delete une carte des favoris
router.delete('/users/:id/bookmarks/:id',checkJwt, bookmarkController.deleteBookmarkById);

// ************** USERS *******************

//USER ACCOUNT CRUD

//CREATE
router.post('/signup', userController.signUp);

router.route('/users/:id')
    .get(checkJwt, userController.findById) //READ
    .put(checkJwt, userController.update) //UPDATE
    .delete(checkJwt, userController.deleteUserById); //DELETE

// READ : for user experience
//Acces a view of a user with the list of its bookmarks' id : allow to show bookmarked cards from all cards in client
router.get('/user',checkJwt, userController.getUserWithBookmarksInfo);

// ************** SECURITY **************
// route pour le refresh Token
router.post('/api/refreshToken',checkRefreshToken, refreshToken.refreshToken);

// ************** "OTHERS" **************
// LOGIN
router.post('/login', userController.login);

/**
 * Fetches Open Graph meta datas from URL sent by client. Front developpers can insert thoses datas into inputs before rendering insert cards page
 * Access : only logged users
 * @returns {Object} Json   Open Graph meta datas
 */
router.post('/cards',checkJwt, fetchUrlController.findUrl);//renseigner l'URL à fetcher pour nécessaire à l'ajout d'une carte

//route pour vérifier la présence de données en DB avant de se rendre sur une route d'ajout de données (demandée par l'équipe front)
router.get('/verify?', verifyController.signUp);

/**
 * No resource found : error 404
 * 
 */
router.use((_, response) => response.status(404).json('Endpoint non trouvé'));


module.exports = router;
