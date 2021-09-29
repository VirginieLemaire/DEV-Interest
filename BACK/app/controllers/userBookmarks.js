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
            const idcard = parseInt(request.params.id, 10);
            const iduser = request.body.userId;
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
    }
}

module.exports = bookmarksController;