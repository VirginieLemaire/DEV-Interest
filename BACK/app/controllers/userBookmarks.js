const Bookmarks = require('../models/bookmarks');
const jwt = require('../services/jwt');


const bookmarksController = {
    findBookmarksByUserId: async (request, response) => {
        try {
            const id = request.params.id;
            console.log("bookmarksController: voici l'id user récupérée dans les paramètres", id);
            const bookmarks = await Bookmarks.BookmarksByUserId(id);
            if(bookmarks === "") {
                response.status(200).json('Pas de contenu !');
            }else {
                console.log("c'est bon j'envoie la liste des favoris au client");
                response.header('resultat_bookmarks', bookmarks.length);
                response.json(bookmarks);
                console.log("this", this);
                //return this.id;
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


}

module.exports = bookmarksController;