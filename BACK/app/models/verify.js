const client = require('../database');


class Verify {
         
    constructor(obj ={}) {
     
        for (const proname in obj) {
            
            this[proname] = obj[proname];
        }
    }
    static async verifyCard(testUrl) {
        try {
            
            console.log('je suis dans le model de verify et je test url', testUrl);
            const {rows} = await client.query(`SELECT * FROM cards WHERE url= $1`, [testUrl]);
            console.log(rows);
            return new Verify(rows[0]);
           
                 
        }catch(error) {
            console.log(error);
            throw new Error(error.detail ? error.detail : error.message);
        }
    }

    static async verifyUserDatas(data) {
        try {
            //récupérer les infos et chercher dans la table user
            console.log("je suis dans le modèle et voici mes données: ",data.input, `'${data.value}'`);
            const { rows } = await client.query(`SELECT * FROM "user" WHERE to_tsvector('fr',${data.input}::text) @@websearch_to_tsquery('fr', $1)`, [data.value]);
            console.log("rows",rows);
            return rows;
        } catch (error) {
            console.log("je suis dans le catch du modèle ", error);
            // return error;
        }
    }
}
module.exports = Verify;