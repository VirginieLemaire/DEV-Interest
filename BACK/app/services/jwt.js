const JWT = require('jsonwebtoken');

module.exports = {
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
                    expiresIn: '30m'

                }
            );
        } catch (error) {
            console.log(error);
            throw error;
        }
    },

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
    }
}