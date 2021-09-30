const jwt = require('../services/jwt');

module.exports = (request, response, next) => {
    //stocker l'id et appeler next
    try {
        //récupérer le token (! authorization prend ici une minuscule)
        const autHeader = request.headers['authorization'];
        let token = autHeader && autHeader.split(' ')[1];
        if (token == null) return response.sendStatus(401);
        //tester (si erreur sera renvoyé au catch, si ok on continue)
        const payload = jwt.validateToken(token);
        //placer l'id dans request
        request.userId = payload.userId;
        //passer au middleware suivant
        next();
    } catch (error) {
        response.status(500).json(error.message);
    }
}
