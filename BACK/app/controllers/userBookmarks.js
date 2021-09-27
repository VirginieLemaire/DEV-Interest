const Bookmarks = require('../models/bookmarks');

const bookmarksController = {
    findBookmarksByUserId: async (request, response) => {
        try {
            const id = request.params.id
            const bookmarks = await Bookmarks.findBookmarksByUserId(id);
            if(bookmarks === "") {
                response.status(200).json('Pas de contenu !');
            }else {
                response.json(bookmarks);
            }
            
        } catch(error) {
            console.log(error);
            res.status(500).json(error.message);
        }
    },
}

module.exports = bookmarksController;