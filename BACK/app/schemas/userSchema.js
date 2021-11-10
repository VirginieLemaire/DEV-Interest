const Joi = require('@hapi/joi');
//défini les formats de données valides pour vérification des données provenant du front
const userSchema =  Joi.object({
    username: Joi.string().min(4).max(20).required(),
    email: Joi.string().lowercase().email().required(),
    password: Joi.string().min(4).lowercase().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required()
});

module.exports = {
    userSchema
}