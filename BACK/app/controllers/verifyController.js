const Verif = require('../models/verify');

const verifyController = {
    signUp: async (request, response) => {
        try {
            const data = {
               input : request.query.input,
               value : request.query.value
            };  
            console.log("type de input: ",typeof data.input);
            console.log("type de value: ",typeof data.value);
            console.log("dans verifyController : ",data);
            const verif = await Verif.verifyUserDatas(data);
            console.log("voici le retour dans le controller : ", verif.length);
            if (verif.length === 0) {
                response.status(200).json(`super ${data.value} est disponible dans le champ ${data.input} en DB`);
            } else {
                throw new Error(`${data.input} déjà attribué, sorry`);
            }
        } catch (error) {
            console.trace("je suis dans le catch du controller verifyUser",error);
            response.status(403).json(error.message);
        }
    }
}

module.exports = verifyController;