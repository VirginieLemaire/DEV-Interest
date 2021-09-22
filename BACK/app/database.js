const {Pool} = require('pg');

const config = {
    connectionString: process.env.DATABASE_URL,
    ssl:  {
        rejectUnauthorized: false
    }
};

if (process.env.NODE_ENV === 'production') {
    //tit truc de config pour la version de prod sur héroku, ça nous évitera des messages d'erreur
    config.ssl = {
        rejectUnauthorized: false
    }
}

const pool = new Pool(config);

module.exports = pool;