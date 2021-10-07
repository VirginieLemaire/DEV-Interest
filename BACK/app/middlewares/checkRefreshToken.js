const jwt = require('../services/jwt');

module.exports = (request, response, next) => {
    //stocker l'id et appeler next
    try {
        //récupérer le token (! authorization prend ici une minuscule)
        console.log("\n*** Je suis le middleware checkRefreshToken, mon rôle est de récupérer le  refresh token envoyé par le client et vérifier qu'il correspond bien à celui que je connais\n");
        console.log(request.headers);
        const autHeader = request.headers['authorization'];
        console.log("autHeader?", autHeader);
        //on enlève 'Bearer' à autHeader
        let verifRefreshToken = autHeader && autHeader.split(' ')[1];
        console.log(verifRefreshToken);
        
        if (verifRefreshToken == null) return response.sendStatus(401);
        //tester (si erreur sera renvoyé au catch, si ok on continue)
        const payload = jwt.validateRefreshToken(verifRefreshToken);
        console.log("ok c'est good, je place l'id user dans request et on sort de là\n>>>>>>>>>>>\n");
        
        //placer l'id dans request
        request.userId = payload.userId;
        //passer au middleware suivant
        next();
    } catch (error) {
        response.status(401).json(error.message);
    }
}