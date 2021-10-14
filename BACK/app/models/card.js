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
    static async findQueryAllCards(searchQuery,limit,skip) {
        try {
            console.log(`\nHI! Je suis le model findQueryAllCards, voyons la recherche passée et les infos de pagination : `);
            
            console.log({searchQuery}, {limit}, {skip});
            //faire une phrase avec tous les champs
            const select = 'SELECT *,count(*) OVER() AS full_count FROM cards';
            let keyword = '';
            let tech = '';
            let category = '';
            let level = '';
            let type = '';
            let lang = '';
            const pagination = `ORDER BY createdAt DESC LIMIT ${limit} OFFSET ${skip}`;
            if (searchQuery.keyword) keyword = `WHERE to_tsvector('fr',cards::text) @@websearch_to_tsquery('fr', '${searchQuery.keyword}')`;

            if (searchQuery.tech !== 'all') tech = `AND to_tsvector('fr', techs::text) @@websearch_to_tsquery('fr', '${searchQuery.tech}')`;
            if (searchQuery.category !== 'all') category = `AND to_tsvector('fr', category::text) @@websearch_to_tsquery('fr', '${searchQuery.category}')`;
            if (searchQuery.level !== 'all') level = `AND to_tsvector('fr', level::text) @@websearch_to_tsquery('fr', '${searchQuery.level}')`;
            if (searchQuery.type !== 'all') type = `AND to_tsvector('fr', type::text) @@websearch_to_tsquery('fr', '${searchQuery.type}')`;
            if (searchQuery.lang !== 'all') lang = `AND to_tsvector('fr', lang::text) @@websearch_to_tsquery('fr', '${searchQuery.lang}')`;

            console.log(`${select} ${keyword} ${tech} ${category} ${level} ${type} ${lang}${pagination};`);
            
            //chercher dans toutes les colonnes sauf slug et URLs
            const {rows} = await client.query(`${select} ${keyword} ${tech} ${category} ${level} ${type} ${lang}${pagination}`) ;
            //console.log('résultat: ', rows);
            //renvoyer au front           
            return rows.map(row => new Cards(row));
            
                
        }catch(error) {
            console.log(error);
            throw new Error(error.detail ? error.detail : error.message);
        }
    }
    //trouver une carte via son id
    static async findById(id) {
        try {
            //requête vers la table
            console.log(">>> je vais chercher la vue carte dans la table");
            
            //const { rows } = await client.query('SELECT card.*, ARRAY_AGG(card_has_tech.tech_id) techs FROM card JOIN card_has_tech ON card_has_tech.card_id = card.id WHERE card.id=$1 GROUP BY card.id;', [id]);
            const {rows} = await client.query(`SELECT * FROM cards WHERE id=$1`, [id]);
            //condition pour agir selon que la requête renvoie quelque chose ou non
            if (rows[0]) {
                return new Cards(rows[0]);
            }
            return null;

            
        } catch (error) {
            //voir l'erreur en console
            console.trace(error);
            //renvoyer l'erreur au front
            throw new Error(error.detail ? error.detail : error.message);
        }
    }
        //trouver une carte via son id
    static async findOneToUpdate(id) {
        try {
            //requête vers la table
            console.log(">>> je vais chercher la vue carte dans la table");
            
            //const { rows } = await client.query('SELECT card.*, ARRAY_AGG(card_has_tech.tech_id) techs FROM card JOIN card_has_tech ON card_has_tech.card_id = card.id WHERE card.id=$1 GROUP BY card.id;', [id]);
            const {rows} = await client.query(`SELECT * FROM card WHERE id=$1`, [id]);
            //condition pour agir selon que la requête renvoie quelque chose ou non
            if (rows[0]) {
                return new Cards(rows[0]);
            }
            return null;

            
        } catch (error) {
            //voir l'erreur en console
            console.trace(error);
            //renvoyer l'erreur au front
            throw new Error(error.detail ? error.detail : error.message);
        }
    }
    //enregistrer une nouvelle carte
    async save() {
        try {
            //insérer les valeurs avec une fonction new_card qui fait l'objet d'une migration sqitch
            const {rows} = await client.query('SELECT new_card($1) AS id', [this]);
            this.id = rows[0].id;
            //puis insérer les valeurs dans les tables de liaison
            //1. catégorie
            await client.query('SELECT card_category($1) AS id', [this]);
            //2. ajouter la carte dans les favoris utilisateur
            await client.query('SELECT user_card($1) AS id', [this]);
            //3. technos
            // ! avec sanitize, la liste des technos n'est plus au bon format, il faut le repasser en array
            let techsList = this.techs;
            let techsToArray = techsList.split(",");
            //boucler sur toutes les technos
            for (let tech of techsToArray) {  
            await client.query('INSERT INTO card_has_tech (card_id,tech_id) VALUES ($1,$2) RETURNING id', [this.id, tech]);
            }
            //renvoyer l'info
            return this;
  
        } catch (error) {
            console.log('Erreur SQL', error.detail);
            //relancer l'erreur pout que le controller puisse l'attrapper et la renvoyer au front
            throw new Error(error.detail ? error.detail : error.message);
        }
    }
    
}
module.exports = Cards;    