const { request, response } = require("express")
const jwt = require('../services/jwt');

const refreshToken = {
    refreshToken : (request,response) =>{
        const user = request.userId
        const accessToken = jwt.makeToken(user.id);
    response.header('Authorization', accessToken).send({accessToken: accessToken,user});
    
    }
}

module.exports = refreshToken;