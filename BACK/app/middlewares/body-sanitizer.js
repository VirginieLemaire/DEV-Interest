const sanitizer = require('sanitizer');

const bodySanitizer = (req, res, next) => {
    // boucler sur les clés
    for (let propName in req.body) {
        console.log('Avant sanitizer :', req.body[propName]);
        req.body[propName] = sanitizer.escape(req.body[propName]);// Escapes HTML special characters in attribute values as HTML entities
        console.log('Après sanitizer :', req.body[propName]);
    };
    next();
};

module.exports = bodySanitizer;