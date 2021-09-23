require('dotenv').config();
const cors = require('cors');
const express = require('express');

const router = require('./app/router');

const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;
app.use(express.urlencoded({extended:false}));
//autorisation pour tout l'internet 
app.use(cors());


app.use('/', router);

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});