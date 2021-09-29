const client = require('../database');

class Cards {
    constructor(obj ={}) {
        for (const proname in obj) {
            this[proname] = obj[proname];
        }
    }
    static async findAllCards(limit, skip) {
        try {
            
            const {rows} = await client.query(`SELECT * FROM cards ORDER BY createdAt DESC LIMIT ${limit} OFFSET ${skip}`);
            return rows.map(row => new Cards(row));
            
                
        }catch(error) {
            console.log(error);
            throw new Error(error.detail ? error.detail : error.message);
        }
    }
    static async findQueryAllCards(keyword,limit,skip) {
        try {
            console.log({keyword}, {limit}, {skip});

            //chercher dans toutes les colonnes sauf slug et URLs
            //il faut passer aussi les technos pour pouvoir chercher sur ses valeurs
            const {rows} = await client.query(`SELECT cards.*, tech.name FROM cards
            JOIN card_has_tech ON cards.id = card_has_tech.card_id
            JOIN tech ON card_has_tech.tech_id = tech.id
            --vectorise la colonne et la compare au parsage en query de la recherche
                WHERE to_tsvector('french',title) @@websearch_to_tsquery('french', '${keyword}')
                OR to_tsvector('french',website) @@websearch_to_tsquery('french', '${keyword}')
                OR to_tsvector('french',description) @@websearch_to_tsquery('french', '${keyword}')
                OR to_tsvector('french',category) @@websearch_to_tsquery('french', '${keyword}')
                OR to_tsvector('french',"level") @@websearch_to_tsquery('french', '${keyword}')
                OR to_tsvector('french',"type") @@websearch_to_tsquery('french', '${keyword}')
                OR to_tsvector('french',contributor) @@websearch_to_tsquery('french', '${keyword}')
                OR to_tsvector('french',lang) @@websearch_to_tsquery('french', '${keyword}')
                OR to_tsvector('french',tech.name) @@websearch_to_tsquery('french', '${keyword}') 
                ORDER BY createdAt DESC LIMIT ${limit} OFFSET ${skip}`);
            //console.log(rows);
            //renvoyer au front           
            return rows.map(row => new Cards(row));
            
                
        }catch(error) {
            console.log(error);
            throw new Error(error.detail ? error.detail : error.message);
        }
    }
    //enregistrer une nouvelle carte ou mettre à jour une carte
    async save() {
        try {
            //si les datas envoyées du front possèdent un id alors on faitun update, sinon un ajout
            if (this.id) {
                //aller chercher les différents id dans la table card_has_tech pour checker quelle asociation a potentiellement été modifiée.
                const association = await client.query('SELECT id FROM card_has_tech WHERE card_id = $1', [this.id]);
                console.log(association);
                //TODO : comparer l'existant DB et this pour mettre à jour seulement celui qu'on ne trouve pas
                //updater l'enregistrement avec une fonction update_card qui fait l'objet d'une migration sqitch
                await client.query('SELECT update_card($1)', [this]);
            } else {
                //insérer les valeurs avec une fonction new_card qui fait l'objet d'une migration sqitch
                const {rows} = await client.query('SELECT new_card($1) AS id', [this]);
                this.id = rows[0].id;
                //insérer les valeurs dans les tables de liaison
                await client.query('SELECT card_category($1) AS id', [this]);
                //technos : avec sanitize, la liste des technos n'est plus au bon format, il faut le repasser en array
                let techsList = this.techs;
                let techsToArray = techsList.split(",");
                //boucler sur toutes les technos
                for (let tech of techsToArray) {  
                    await client.query('INSERT INTO card_has_tech (card_id,tech_id) VALUES ($1,$2) RETURNING id', [this.id, tech]);
                }
                //TODO ajouter la carte en favori utilisateur
                //renvoyer l'info
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