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
            console.log('récupérer les infos de login');
            const login = request.body;
            //authentification
            console.log('authentifier le user, on part dans le modèle');
            const user = await new User(login).findUser();
            console.log('ok on a trouvé le user, on crée le token');
            //console.log({user});
            //response.header('Access-Control-Allow-Origin', 'http://localhost:8080');
            //response.header('Access-Control-Allow-Headers', 'Content-Type, Accept, Authorization');
            //response.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
            //response.cookie('Authorization' , jwt.makeToken(user.id), { maxAge: 1800});
            //response.setHeader(`id = ${user.id}`);
            //response.setHeader('Authorization' , jwt.makeToken(user.id));
            const accessToken = jwt.makeToken(user.id);
            console.log('token user créé, on envoie tout au client');
            response.header('Authorization', accessToken).send({accessToken: accessToken,user});
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
            console.log("j'envoie les infos envoyées par le client dans le modèle");
            const user = await new User(request.body).signUp();
            console.log('je suis dans le controller', user);
            const accessToken = jwt.makeToken(user.id);
            response.send({user});
            //response.status(201).json(user);
            

        } catch(error) {
           //lire l'erreur
           console.trace(error);
           //envoyer l'info au front
           response.status(500).json(error.message);
        }
    },
    deleteUserById: async (request, response) => {
        try {
            const id = parseInt(request.params.id,10);
            console.log(id);
            const user = await new User(id).deleteUserById(id);
            response.setHeader('Authorization', jwt.makeToken(id));
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
            //créer un objet avec toutes les données user à envoyer
            let userDatas = {
                id : request.params.id,
                email : request.body.email,
                password : request.body.password,
                username : request.body.username
            };
 
            //UPDATE
            const user = await new User(userDatas).update();
            response.status(204).json({success: true});
            
        } catch(error) {
           //lire l'erreur
           console.trace(error);
           //envoyer l'info au front
           response.status(500).json(error.message);
        }
    },
    //tester la validation de ce token (qui fait la requête)
    getInfos: (request, response,next) => {
        try {
            console.log(request.userId);
            const infos = {
                message: "Ceci est un message obtenu après avoir vérifié qui a fait la requête",
            }
            //créer un nouveau token
            // pour avoir l'id il faut qu'il soit stocké quelque part -> dans la request grâce au middleware
            response.setHeader('Authorization', jwt.makeToken(request.userId));
            response.status(200).json(infos);
            next();
            
        } catch (error) {
            console.trace(error);
            //renvoyer l'info au front
            response.status(500).json(error.message);
        }
    },
    findByContributor: async (request, response) => {
        try {
            const id = request.userId;
            const user = await User.findContributor(id);
            response.json(user);
        } catch(error) {
            console.log(error);
        }
    },

}

module.exports = userController;