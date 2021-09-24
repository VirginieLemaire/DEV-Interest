const jwt = require('../services/jwt');

module.exports = (request, response, next) => {
    try {
        let token = request.headers['authorization'];
        const payload = jwt.validateToken(token);
        request.userId = payload.userId
        next();
    } catch (error) {
        response.status(500).json(error.message);
    }
}