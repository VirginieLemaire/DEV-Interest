require('dotenv').config();
const express = require('express');
const router = require('./app/router');

const app = express();
const port = process.env.PORT || 3000;

//SECURITY:
//protects access to API
const cors = require('cors');
app.use(cors());//grant access to every URL
//avoid XSS attacks
const bodySanitizer = require('./app/middlewares/body-sanitizer');
app.use(bodySanitizer);


//body-parsers
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//send router
app.use('/', router);
//listen
app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});
