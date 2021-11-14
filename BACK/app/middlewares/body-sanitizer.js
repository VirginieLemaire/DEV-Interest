const sanitizer = require('sanitizer');

const bodySanitizer = (req, res, next) => {
    console.log("\n*** Hello, je suis Sanitizer, ma fonction est d'éviter les attaques XSS en nettoyant ce qui envoyé du client");
    //if client doesn't send data to sanitize, go next
    if (!req.body) {
        console.log("Aucune donnée envoyée, je passe la main *****************************");
    } else {
        // sanitize every data
        for (let propName in req.body) {
            console.log('\nValeur envoyée par le client :', req.body[propName]);
            // Escapes HTML special characters in attribute values as HTML entities
            req.body[propName] = sanitizer.escape(req.body[propName]);
            console.log('valeur nettoyée par Sanitizer et envoyée au serveur -> ', req.body[propName]);
            // if HTML entities have been escaped : unescape it before sending to DB
            req.body[propName] = sanitizer.unescapeEntities(req.body[propName]);
            console.log('nettoyage des éventuelles entités HTML envoyées au serveur -> ', req.body[propName]);
        };
        console.log("\nEverything's clear, je passe la main **************************\n");
    }
    next();
};

module.exports = bodySanitizer;