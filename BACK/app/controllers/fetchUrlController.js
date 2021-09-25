const fetchOpengraph = require('fetch-opengraph');

const fetchUrlController = {
    findUrl: async (request, response) => {
        try {
            //lien url "input form url"
            const url = await await fetchOpengraph.fetch(request.body.url);
            //response.setHeader('Authorization', jwt.makeToken(id));
            if(url === {}) {
                response.status(201).json('pas de contenu');
            }else {
                var ogurl = url['og:url'];
                    console.log(ogurl) ;
                    response.json(url);
            }
        } catch(error) {
            console.log(error);
            response.status(500).json(error.message);
        }
    },
}

module.exports = fetchUrlController;