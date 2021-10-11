const sanitizer = require('sanitizer');

const bodySanitizer = (req, res, next) => {
    console.log("\n*** Hello, je suis Sanitizer, ma fonction est d'éviter les attaques XSS en nettoyant ce qui envoyé du client");
    //condition pour passer au middleware suivant si le client n'envoie pas de données à nettoyer
    if (Object.keys(req.body).length === 0) {
        console.log("Aucune donnée envoyée, je passe la main *****************************");
    } else {
        // boucler sur les clés
        for (let propName in req.body) {
            console.log('\nValeur envoyée par le client :', req.body[propName]);
            req.body[propName] = sanitizer.escape(req.body[propName]);// Escapes HTML special characters in attribute values as HTML entities
            console.log('valeur nettoyée par Sanitizer et envoyée au serveur -> ', req.body[propName]);
            req.body[propName] = sanitizer.unescapeEntities(req.body[propName]);// repasse les entités en texte
            console.log('nettoyage des éventuelles entités HTML envoyées au serveur -> ', req.body[propName]);
        };
        console.log("\nEverything's clear, je passe la main **************************\n");
    }
    next();
};

module.exports = bodySanitizer;