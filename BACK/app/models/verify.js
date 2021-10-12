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
}
module.exports = Verify;