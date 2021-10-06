const sanitizer = require('sanitizer');

const bodySanitizer = (req, res, next) => {
    console.log("\n*** Hello, je suis Sanitizer, ma fonction est d'éviter les attaques XSS en nettoyant ce qui envoyé du client");
    // boucler sur les clés
    for (let propName in req.body) {
        console.log('\nValeur envoyée par le client :', req.body[propName]);
        req.body[propName] = sanitizer.escape(req.body[propName]);// Escapes HTML special characters in attribute values as HTML entities
        console.log('valeur nettoyée par Sanitizer et envoyée au serveur -> ', req.body[propName]);
    };
    console.log("\nEverything's clear, je passe la main ***\n");
    next();
};

module.exports = bodySanitizer;