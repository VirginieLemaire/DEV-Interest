const { request } = require("express");
const User = require("../models/user");

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
            const login = request.body
            //authentification
            const user = await new User(login).findUser();
            response.status(200).json(user);
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
            const user = await new User(request.body).signUp();
            //response.setHeader('Authorization', jwt.makeToken(user.id));
            response.status(201).json(user);

        } catch(error) {
           //lire l'erreur
           console.trace(error);
           //envoyer l'info au front
           response.status(500).json(error.message);
        }
    }

}

module.exports = userController;