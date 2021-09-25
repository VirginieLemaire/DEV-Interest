const client = require('../database');

class Bookmarks {

    constructor(obj ={}) {
        for (const proname in obj) {
            this[proname] = obj[proname];
        }
    }

    static async findBookmarksByUserId(id) {
        try {
            
            const {rows} = await client.query(`SELECT * FROM cards WHERE user_id = $1 ORDER BY createdAT`,[id]);
           
                return rows.map(row => new Bookmarks(row));
            
                
        }catch(error) {
            console.log(error);
            throw new Error(error.detail ? error.detail : error.message);
        }
    }

}
module.exports = Bookmarks;  