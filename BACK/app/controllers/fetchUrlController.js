const fetchOpengraph = require('fetch-opengraph');

const fetchUrlController = {
    findUrl: async (request, response) => {
        try {
            //lien url "input form url"
            const url = await await fetchOpengraph.fetch(request.body.url);
            //response.setHeader('Authorization', jwt.makeToken(id));
            if(url === response.status(404)) {

                console.log('vide');
            }else {
                response.json(url);
                console.log(url);
            }
            
        } catch(error) {
            console.log(error);
            response.status(500).json(error.message);
        }
    },
}

module.exports = fetchUrlController;