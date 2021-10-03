const jwt = require('../services/jwt');

module.exports = (request, response, next) => {
    //stocker l'id et appeler next
    try {
        //récupérer le token (! authorization prend ici une minuscule)
        console.log("\nje suis le middleware checkJWT, mon rôle est de récupérer le token envoyé par le client et vérifier qu'il correspond bien à celui que je connais\n");
        
        const autHeader = request.headers['authorization'];
        let token = autHeader && autHeader.split(' ')[1];
        console.log(autHeader);
        if (token == null) return response.sendStatus(401);
        //tester (si erreur sera renvoyé au catch, si ok on continue)
        const payload = jwt.validateToken(token);
        console.log("ok c'est good, je place l'id user dans request et on sort de là\n>>>>>>>>>>>\n");
        
        //placer l'id dans request
        request.userId = payload.userId;
        //passer au middleware suivant
        next();
    } catch (error) {
        response.status(500).json(error.message);
    }
}
