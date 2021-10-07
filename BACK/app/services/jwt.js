const JWT = require('jsonwebtoken');
const {response} = require('express');


module.exports = {
    // access token
    makeToken: userId => {
        try {
            return JWT.sign(
                //payload
                {
                    userId
                },
                //le mot de passe de chiffrement
                process.env.JWT_SECRET,
                //header
                {
                    algorithm: 'HS256',
                    expiresIn: '1m'

                }
            );
        } catch (error) {
            console.log(error);
            throw error;
        }
    },
    //vérification access token
    validateToken: token => {
        try {
            return JWT.verify(
                token,
                process.env.JWT_SECRET,
                {
                    algorithms: ['HS256']
                }
            );
        } catch (error) {
            console.log(error);
            throw error;
        }
    },
    refreshToken: userId => {
        try {
            return JWT.sign(
                //payload
                {
                    userId
                },
                //le mot de passe de chiffrement
                process.env.JWT_REFRESHTOKEN,
                //header
                {
                    algorithm: 'HS256',
                    expiresIn: '1y'

                }
            );
        } catch (error) {
            console.log(error);
            throw error;
        }
    },
    //vérification access token
    validateRefreshToken: token => {
        try {
            
            return JWT.verify(
                token,
                process.env.JWT_REFRESHTOKEN,
                {
                    algorithms: ['HS256']
                }
            );
        } catch (error) {
            console.log(error);
            throw error;
        }
    },
}