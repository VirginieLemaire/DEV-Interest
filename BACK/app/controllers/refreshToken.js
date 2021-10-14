const { request, response } = require("express")
const jwt = require('../services/jwt');

const refreshToken = {
    refreshToken : (request,response) =>{
        //je récupère l'id du user que j'ai placé dans reques.userId dans le checkRefreshToken
        console.log("coucou, je suis dans le refreshToken controller et je vais créer un nouvelle accessToken");
        const user = {id:request.userId};
        console.log('je suis dans refreshToken et j\'ai l\'user :',user);
        //je crée un nouvel accesToken
        const accessToken = jwt.makeToken(user.id);
        //on le renvoie au client
    response.header('Authorization', accessToken).send({accessToken: accessToken,user});
    
    }
}

module.exports = refreshToken;