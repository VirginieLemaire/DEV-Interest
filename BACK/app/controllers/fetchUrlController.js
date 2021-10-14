const fetchOpengraph = require('fetch-opengraph');
const Verify = require('../models/verify');

const fetchUrlController = {
    findUrl: async (request, response) => {
        try {
            const arrayImage = [    
                'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGJvb2ttYXJrfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                'https://images.unsplash.com/photo-1633933703119-5d25460ad829?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1171&q=80',
                'https://images.unsplash.com/photo-1633886038290-6023143cd3ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1632&q=80',
                'https://images.unsplash.com/photo-1633835347204-cea1132085a1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1632&q=80',
                'https://images.unsplash.com/photo-1633607092297-95cd35aecba9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1632&q=80',
                'https://images.unsplash.com/photo-1633319146443-da76e98c2026?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80',
                'https://images.unsplash.com/photo-1633412802994-5c058f151b66?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80',
                'https://images.unsplash.com/photo-1633471907459-f11b192e289e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
                'https://images.unsplash.com/photo-1633432695903-9ef31eec6a05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
                'https://images.unsplash.com/photo-1633287453177-24823499b02c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80',
                'https://images.unsplash.com/photo-1633401507861-1727055129e7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80',
                'https://images.unsplash.com/photo-1621815394525-98f11c00dc38?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1632&q=80',
                'https://images.unsplash.com/photo-1624565698535-b0be89187ff4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1593&q=80'

            ];
            const testUrl = request.body.url
            console.log('je suis dans le controller', testUrl);
            const verifUrl = await Verify.verifyCard(testUrl);
            //console.log(verifUrl);
            if (request.body.url === verifUrl.url) {
               return response.status(403).json({error: 'le lien existe déjà avec la carte',url : `/cards/${verifUrl.slug}/${verifUrl.id}`});
            }
            //lien url "input form url"
            const url = await fetchOpengraph.fetch(request.body.url);
            //response.setHeader('Authorization', jwt.makeToken(id));
            if(url === {}) {
                response.status(201).json('pas de contenu');
            } else if (!url['og:image']){
                console.log(url);
                console.log('test image',url['og:image']);
                const image = arrayImage[Math.floor(Math.random() * arrayImage.length)];
                console.log(image);
                url['og:image'] = image;
                console.log('verif dans le else if ',url['og:image']);
                response.json(url);
            }else {
                console.log('verif dans le else ',url['og:image']);
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