const client = require('../database');
const bcrypt = require('bcrypt');

class Contributor {
    /**
     * User table constructor
     * @param {object} obj literal object with properties copied in instance
     */
    constructor(obj = {}) {
        for (const propName in obj) {
            this[propName] = obj[propName];
        }
    }
    static async findContributor(id) {
        try {
            //requête vers la table
            const { rows } = await client.query('SELECT * FROM "cards" WHERE user_id=$1 ORDER BY createdAt', [id]);
            //condition pour agir selon que la requête renvoie quelque chose ou non
            if (rows[0]) {
                return new Contributor(rows);
            }
            return rows;

            
        } catch (error) {
            //voir l'erreur en console
            console.trace(error);
            //renvoyer l'erreur au front
            throw new Error(error.detail ? error.detail : error.message);
        }
    }
    async deleteCard(id_card) {
        try {
            // recherche de l'id de l'utilisateur
            const contributorId = await client.query('SELECT user_id FROM card WHERE id =$1', [id_card]);
            console.log('dans model',this);
            //si l'utilisateur n'est pas le contributeur
            if (!this.id === contributorId) {
                throw new Error('Identification failed');
            }
            await client.query('DELETE FROM "card" WHERE id =$1', [id_card])
        } catch (error) {
            //voir l'erreur en console
            console.trace(error);
            //renvoyer l'erreur au front
            throw new Error(error.detail ? error.detail : error.message);
        }
    }
}

module.exports = Contributor;