const client = require('../database');
const User = require('./user');

class Bookmarks extends User{
         
    constructor(obj ={}) {
        super();
        for (const proname in obj) {
            
            this[proname] = obj[proname];
        }
    }

    static async BookmarksByUserId(id,limit, skip) {
        try {
            
            const {rows} = await client.query(`SELECT DISTINCT cards.* FROM "cards" 
            JOIN user_prefer_card ON card_id = cards.id
            JOIN "user" ON "user".id  = cards.user_id
           
            WHERE user_prefer_card.user_id = $1 ORDER BY createdAt`, [id]);
                console.log(id);
                //console.log(rows);
                return rows.map(row => new Bookmarks(row));
            
                
        }catch(error) {
            console.log(error);
            throw new Error(error.detail ? error.detail : error.message);
        }
    }
    async addBookmarkById(id_card, email) {
        try {
            // date NOW avec formatage
             
            await client.query('INSERT INTO user_prefer_card (user_id, card_id, created_at) VALUES((SELECT id FROM "user" WHERE email = $1),$2, DATE NOW()::TIMESTAMPTZ) RETURNING id;', [
                email,
                id_card
            
            ]);
             
                     
        } catch (error) {
            //voir l'erreur en console
            console.trace(error);
            //renvoyer l'erreur au front
            throw new Error(error.detail ? error.detail : error.message);
        }
    }

}
module.exports = Bookmarks;  