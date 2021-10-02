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

            let data = request.body;
            console.log('Signup-request.body dans controller',data)
            const user = await new User(request.body).signUp(data); 
             if(this.result) {
                 response.status(400).json(this.result.error);
             }else {
                //response.status(200).json(user);
                console.log('je suis dans le controller', user);
                response.send({user});
             }
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
            console.log("updateController >> 1) je vais créer un objet userDatas en BOUCLANT sur les datas qui me sont envoyées par le client");
            //boucler sur les propriétés de request.body pour ne mettre à jour que celles qui ont été envoyées
            for (const key in request.body) {
                //créer un objet avec toutes les données user à envoyer
                let userDatas = {
                    id : request.params.id,
                    [key] : request.body[key]
                };
                console.log({userDatas});
                // UPDATE
                console.log("updateController >> j'envoie cet objet au model pour qu'il cause avec la DB");
                console.log('- - - - - - -');
                await new User(userDatas).update();   
            };
            console.log(`updateController >> 2) \\o/ tout s'est bien passé, j'en informe le client`);
            //renvoyer un message au front lui signifiant que tout c'est bien passé
            response.status(204).json('*** tes données ont bien été mises à jour ***');
   
        } catch(error) {
           //lire l'erreur
           console.trace(error);
           //envoyer l'info au front
           response.status(500).json(error.message);
        }
    }    

}

module.exports = userController;