require('dotenv').config();
const express = require('express');
const router = require('./app/router');

//sécurité:
const cors = require('cors');//protéger l'accès à notre API
const bodySanitizer = require('./app/middlewares/body-sanitizer');//éviter attaques XSS

const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;
app.use(express.urlencoded({extended:false}));

//sécurité:
app.use(bodySanitizer);
//autoriser toutes les adresses web
app.use(cors());

app.use('/', router);

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});
