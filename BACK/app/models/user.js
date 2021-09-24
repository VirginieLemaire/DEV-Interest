const client = require('../database');
const bcrypt = require('bcrypt');



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

    async findUser() {
        try {
            //comparer l'email de connexion avec la DB
            const { rows } = await client.query(`SELECT * FROM "user" WHERE id=(SELECT id FROM "user" WHERE email = $1);`, [this.email]); //this vient du constructeur

            //si pas de correspondance on renvoie une erreur
            if (!rows[0]) {
                throw new Error('Identification failed');
            }

            //TODO : hasher le mot de passe (quand les mdp seront hashé en DB)
            if (this.password === rows[0].password) {
            //si tout va bien, on compare le mot de passe avec bcrypt
            //const isValid = await bcrypt.compare(password, rows[0].password);
            //si pas de correspondance = renvoi erreur (sans préciser ce qui ne va pas, par sécurité)
            // if (!isValid) {
            //     throw new Error('Identification failed');
            // }
            
            //renvoyer le user
            this.id = rows[0].id;
            this.username = rows[0].user_name;
            console.log(this);
            return this;
            }

        } catch (error) {
            //voir l'erreur en console
            console.trace(error);
            //renvoyer l'erreur au front
            throw new Error(error.detail ? error.detail : error.message);
        }
    }

    async signUp() {
        try {
            //hasher le mot de passe
            const password = await bcrypt.hash(this.password, 10);
            const {rows} = await client.query('INSERT INTO "user" (email, password, user_name, role_id) VALUES ($1, $2, $3) RETURNING id', [
                this.email,
                password,
                this.username,
                1
            ]);
            this.id = rows[0].id;
            return this;          
        } catch (error) {
            //voir l'erreur en console
            console.trace(error);
            //renvoyer l'erreur au front
            throw new Error(error.detail ? error.detail : error.message);
        }
    }

}

module.exports = User;