const jwt = require('../services/jwt');

module.exports = (request, response, next) => {
    //stocker l'id et appeler next
    try {
        
        //récupérer le token (! authorization prend ici une minuscule)
        console.log("\n*** Je suis le middleware checkJWT, mon rôle est de récupérer le token envoyé par le client et vérifier qu'il correspond bien à celui que je connais\n");
        
        const autHeader = request.headers['authorization'];
        console.log("autHeader est le même que accesstoken?",autHeader);
        //on enlève 'Bearer' à autHeader
        let verifAccessToken = autHeader && autHeader.split(' ')[1];
        console.log("verifAccessToken:",verifAccessToken);
        if (verifAccessToken == null) {
            console.log("la verif ou condition liée à l'access token n'a pas fonctionné");
            return response.sendStatus(401);
        };
        
        //tester (si erreur sera renvoyé au catch, si ok on continue)
        const payload = jwt.validateToken(verifAccessToken);
        console.log("ok c'est good, je place l'id user dans request et on sort de là\n>>>>>>>>>>>\n");
        console.log("payload: ", payload);        
        //placer l'id dans request
        request.userId = payload.userId;
        //passer au middleware suivant
        next();
    } catch (error) {
        response.status(401).json(error.message);
    }
}
