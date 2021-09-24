const client = require('../database');

class Cards {
    constructor(obj ={}) {
        for (const proname in obj) {
            this[proname] = obj[proname];
        }
    }
    static async findAllCards(limit, skip) {
        try {
            
            const {rows} = await client.query(`SELECT * FROM cards ORDER BY createdAT LIMIT ${limit} OFFSET ${skip}`);
           
                return rows.map(row => new Cards(row));
            
                
        }catch(error) {
            console.log(error);
            throw new Error(error.detail ? error.detail : error.message);
        }
    }
    static async findQueryAllCards(limit,skip) {
        try {
            
            const {rows} = await client.query(`SELECT * FROM cards ORDER BY createdAT LIMIT ${limit} OFFSET ${skip}`);
           
                return rows.map(row => new Cards(row));
            
                
        }catch(error) {
            console.log(error);
            throw new Error(error.detail ? error.detail : error.message);
        }
    }
    async save() {
        try {
            //si les datas envoyées du front possèdent un id alors on faitun update, sinon un ajout
            if (this.id) {
                //updater l'enregistrement avec une fonction update_card qui fait l'objet d'une migration sqitch
                await client.query('SELECT update_card($1)', [this]);
            } else {
                //insérer les valeurs avec une fonction new_card qui fait l'objet d'une migration sqitch
                const {rows} = await client.query('SELECT new_card($1) AS id', [this]);
                this.id = rows[0].id;
                return this;
            }
        } catch (error) {
            console.log('Erreur SQL', error.detail);
            //relancer l'erreur pout que le controller puisse l'attrapper et la renvoyer au front
            throw new Error(error.detail ? error.detail : error.message);
        }
    }
}
module.exports = Cards;    