const client = require('../database');


class User {
    /**
     * User table constructor
     * @param {object} obj literal object with properties copied in instance
     */
    constructor(obj = {}) {
        for (const propName in obj) {
            this[propName] = obj[propName];
        }
    }

    //Récupérer un user via son id
    /**
     * Fetch un user dans la base de données
     * @param {number} id id du user
     * @returns {User | null} renvoie null s'il n'y a pas de user correspondant
     * @async
     * @static
     */
    static async findById(id) {
        try {
            //requête vers la table
            const { rows } = await client.query('SELECT * FROM "user" WHERE id=$1', [id]);
            //condition pour agir selon que la requête renvoie quelque chose ou non
            if (rows[0]) {
                return new User(rows[0]);
            }
            return null;

            
        } catch (error) {
            //voir l'erreur en console
            console.trace(error);
            //renvoyer l'erreur au front
            throw new Error(error.detail ? error.detail : error.message);
        }
    }


}

module.exports = User;