const Bookmarks = require('../models/bookmarks');

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
            res.status(500).json(error.message);
        }
    },
    addBookmarkById: async (request, response) => {
        try {
            const body = request.body;
            
            const id = request.params.id;
            const bookmark = await new Bookmarks().addBookmarkById(id,body);
            
            response.status(201).json(bookmark);
            
        } catch(error) {
            console.log(error);
            res.status(500).json(error.message);
        }
    }
}

module.exports = bookmarksController;