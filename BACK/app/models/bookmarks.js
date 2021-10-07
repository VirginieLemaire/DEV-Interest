const client = require('../database');
//const User = require('./user');

class Bookmarks {
         
    constructor(obj ={}) {
     
        for (const proname in obj) {
            
            this[proname] = obj[proname];
        }
    }

    static async BookmarksByUserId(id,limit, skip) {
        try {
            
            const {rows} = await client.query(`SELECT DISTINCT cards.* FROM "cards" 
            JOIN user_prefer_card ON card_id = cards.id
            JOIN "user" ON "user".id  = cards.user_id
           
            WHERE user_prefer_card.user_id = $1 ORDER BY createdAt DESC`, [id]);
                
                //console.log(rows);
                return rows.map(row => new Bookmarks(row));
            
                
        }catch(error) {
            console.log(error);
            throw new Error(error.detail ? error.detail : error.message);
        }
    }
    async addBookmarkById(idcard,iduser) {
        try {
            // date NOW avec formatage
            console.log("je rajoute la card à la liste des favoris");
            await client.query('INSERT INTO user_prefer_card (user_id, card_id) VALUES($1,$2) RETURNING id;', [
                iduser,
                idcard
                
            ]);
            console.log("je vais récupérer les favoris du user");
            const bookmarksUser = await client.query(`SELECT * FROM user_bookmarks WHERE id= $1;`, [iduser]);
            console.log("je renvoie le tableau d'id de bookmarks");
            console.log(bookmarksUser.rows);

            //renvoyer le tableau d'id de bookmarks au controller            
            return bookmarksUser.rows[0].bookmarks;
   
        } catch (error) {
            //voir l'erreur en console
            console.trace(error);
            //renvoyer l'erreur au front
            throw new Error(error.detail ? error.detail : error.message);
        }
    }
    async deleteBoomarkById(id_bookmark,iduser) {
        try {
            console.log('je suis dans le model', id_bookmark);
            await client.query('DELETE FROM "user_prefer_card" WHERE card_id =$1 AND user_id=$2', [id_bookmark, iduser]);
            console.log("je vais récupérer les favoris du user");
            const bookmarksUser = await client.query(`SELECT * FROM user_bookmarks WHERE id= $1;`, [iduser]);
            console.log("je renvoie le tableau d'id de bookmarks");
            console.log(bookmarksUser.rows);

            //renvoyer le tableau d'id de bookmarks au controller            
            return bookmarksUser.rows[0].bookmarks;
        } catch (error) {
            //voir l'erreur en console
            console.trace(error);
            //renvoyer l'erreur au front
            throw new Error(error.detail ? error.detail : error.message);
        }
    }


}
module.exports = Bookmarks;  