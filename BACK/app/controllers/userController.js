const User = require("../models/user");
const jwt = require('../services/jwt');

const userController = {
    //Trouver une user (nécessite un id)
    findById: async (request, response) => {
        try {
            const id = parseInt(request.params.id, 10);
            const user = await User.findById(id);
            response.json(user);
        } catch(error) {
            console.log(error);
        }
    },
    //Renvoyer les infos user suite au login - ou une erreur
    login: async (request, response) => {
        try {
            //récupérer les infos de login
            console.log("\n** Hello, je suis le controller : \n-> un user s'est connecté au client, je récupère les infos de login");
            const login = request.body;
            //authentification
            console.log('Je veux authentifier le user => je vais envoyer les infos au model pour comparaison\n');
            const user = await new User(login).findUser();
            console.log("\nC'est à nouveau le controller: ok on m'a renvoyé un user, je crée le token..............");
            

            //access token
            const accessToken = jwt.makeToken(user.id);
            console.log(accessToken);
            // refresh token
            const refreshToken = jwt.refreshToken(user.id);
            console.log('token user créé, on envoie tout au client\n\n');
            response.header({'Authorization': accessToken,'refreshToken': refreshToken}).send({accessToken: accessToken, refreshToken: refreshToken,user,});
            
            // response.send({
            //     accessToken: accessToken,
            // });
            // response.status(200).json(user);

        } catch (error) {
            //lire l'erreur
            console.trace(error);
            //envoyer l'info au front
            response.status(500).json(error.message);
        }
    },
    //S'enregistrer
    signUp: async (request, response) => {
        try {
            let data = request.body;
            console.log('Signup-request.body dans controller',data);
            console.log("\n>>> signupController: j'envoie les infos envoyées par le client dans le modèle\n");
            const user = await new User().signUp(data);
            console.log("\n>>> je suis de retour dans le controller voici ce que je reçois", user);
            //response.status(200).json(user);
            //access token
            const accessToken = jwt.makeToken(user.id);
            console.log(accessToken);
            // refresh token
            const refreshToken = jwt.refreshToken(user.id);
            console.log('token user créé, on envoie tout au client\n\n');
            response.header({'Authorization': accessToken,'refreshToken': refreshToken}).send({accessToken: accessToken, refreshToken: refreshToken,user,});
            console.log("pas d'erreur, je renvoie", user);
            response.send({user});
            
        } catch(error) {
            //lire l'erreur
            console.log("!!! Voici l'erreur dans le catch du controller: ",error.message);
            //console.trace(error);
            //envoyer l'info au front
            response.status(409).json(error);
           //response.status(500).json(error.message);
        }
},
    deleteUserById: async (request, response) => {
        try {
            const id = parseInt(request.params.id,10);
            console.log(id);
            const user = await new User(id).deleteUserById(id);
            delete request.headers['authorization']; // should be lowercase
            response.status(201).json({success: true});
            

        } catch(error) {
           //lire l'erreur
           console.trace(error);
           //envoyer l'info au front
           response.status(500).json(error.message);
        }
    },
     //update a user
     update : async (request, response) => {
        try {
            console.log("updateController >> 1) je vais créer un objet userDatas qui va mixer les données en param et dans le body");
            let userDatas = {
                id : request.params.id,
            };
            console.log("voici ce qui envoyé dans le body par le client", request.body);
            //boucler sur les propriétés de request.body pour ne mettre à jour que celles qui ont été envoyées
            for (const key in request.body) {
                userDatas[key] = request.body[key]
            }
            console.log({userDatas});
            // UPDATE
            console.log("updateController >> j'envoie cet objet au model pour qu'il cause avec la DB");
            console.log('- - - - - - -');
            const user = await new User(userDatas).update();   
            console.log("\nupdateController >> 2) \\o/ tout s'est bien passé, j'en informe le client\n");
            //renvoyer un message au front lui signifiant que tout c'est bien passé
            response.status(201).json(user);
   
        } catch(error) {
           //lire l'erreur
           console.trace(error);
           //envoyer l'info au front
           response.status(500).json(error.message);
        }
    },
    getUserWithBookmarksInfo : async (request, response) => {
        try {
            console.log("let's see what's in request userId...: ",request.userId);
            
            console.log("\n Hello, je suis dans le userController !\n je stocke l'id du user connecté dans un objet à passer au model qui va instancier la classe User");
            const getId ={ userId: request.userId};
            console.log(getId);
            const user = await new User(getId).userWithBookmarksId();
            console.log("<<< de retour dans le controller, voici ce que la requête a retourné : ");
            console.log(user);
            
             //access token
             const accessToken = jwt.makeToken(request.userId);
             console.log(accessToken);
             // refresh token
             const refreshToken = jwt.refreshToken(request.userId);
             console.log('token user créé, on envoie tout au client\n\n');
             response.header({'Authorization': accessToken,'refreshToken': refreshToken}).send({accessToken: accessToken, refreshToken: refreshToken, user});
            //response.status(201).json(userWithBookmarksId);
        } catch (error) {
            console.log(error);
            response.status(401).json(error.message);
        }
    }


}

module.exports = userController;