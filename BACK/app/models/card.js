const client = require('../database');

class Cards {
    constructor(obj ={}) {
        for (const proname in obj) {
            this[proname] = obj[proname];
        }
    }
    static async findAllCards() {
        try {
            
            const {rows} = await client.query(`SELECT * FROM cards`);
           
                return rows.map(row => new Cards(row));
            
                
        }catch(error) {
            console.log(error);
            throw new Error(error.detail ? error.detail : error.message);
        }
    }
    static async findQueryAllCards(limit,skip) {
        try {
            
            const {rows} = await client.query(`SELECT * FROM cards LIMIT ${limit} OFFSET ${skip}`);
           
                return rows.map(row => new Cards(row));
            
                
        }catch(error) {
            console.log(error);
            throw new Error(error.detail ? error.detail : error.message);
        }
    }
}
module.exports = Cards;    