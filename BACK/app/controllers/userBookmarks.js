const Bookmarks = require('../models/bookmarks');
const jwt = require('../services/jwt');


const bookmarksController = {
    findBookmarksByUserId: async (request, response) => {
        try {
            const id = request.params.id;
            console.log('controller', id);
            const bookmarks = await Bookmarks.BookmarksByUserId(id);
            if(bookmarks === "") {
                response.status(200).json('Pas de contenu !');
            }else {
                response.header('resultat_bookmarks', bookmarks.length);
                response.json(bookmarks);
                return this.id;
            }
            
        } catch(error) {
            console.log(error);
            response.status(500).json(error.message);
        }
    },
    addBookmarkById: async (request, response) => {
        try {
            // params id de la carte
            console.log("je récupère les infos de la carte et du user");
            const idcard = parseInt(request.params.id, 10);
            const iduser = request.userId;
            console.log({idcard}, {iduser});
            // id de l'user dans le cookie
            //response.setHeader('Authorization', jwt.makeToken(request.userId));
            //const iduser = response.cookie('id');
            // console.log('Cookies: ', response.cookies);
            // console.log('test' ,iduser);
            // console.log('idcard', idcard, 'iduser', iduser);
            const bookmark = await new Bookmarks(idcard,iduser).addBookmarkById(idcard,iduser);
            
            response.status(201).json(bookmark);
            return idcard, iduser;
        } catch(error) {
            console.log(error);
            response.status(500).json(error.message);
        }
    },
    deleteBookmarkById : async (request, response) => {
        try {
            const id_bookmark = request.params.id;
            const iduser = request.userId;
            console.log('je suis dans le controller', id_bookmark);
            console.log('je suis dans le controller', iduser);
            const bookmark = await new Bookmarks(id_bookmark,iduser).deleteBoomarkById(id_bookmark,iduser);
            response.status(201).json(bookmark);
        }catch (error) {
            console.log(error);
            response.status(500).json(error.message);
        }
    },
    getUserWithBookmarksInfo : async (request, response) => {
        try {
            console.log("let's see what's in request userId...: ",request.userId);
            
            console.log("\n Hello, je suis dans le bookmarksController !\n je stocke l'id du user connecté dans un objet à passer au model bookmarks qui va instancier la classe Bookmarks");
            const userId ={ userId: request.userId};
            console.log(userId);
            const userWithBookmarksId = await new Bookmarks(userId).userWithBookmarksId();
            console.log("<<< de retour dans le controller, voici ce que la requête a retourné : ");
            console.log(userWithBookmarksId);
            response.status(201).json(userWithBookmarksId);
        } catch (error) {
            console.log(error);
            response.status(500).json(error.message);
        }
    }

}

module.exports = bookmarksController;