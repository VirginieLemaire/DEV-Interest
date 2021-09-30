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
            const { rows } = await client.query(`SELECT * FROM user_bookmarks WHERE id=(SELECT id FROM "user" WHERE email = $1);`, [this.email]); //this vient du constructeur

            //si pas de correspondance on renvoie une erreur
            if (!rows[0]) {
                throw new Error('Identification failed');
            }

            const isValid = await bcrypt.compare(this.password, rows[0].password);
            if (!isValid) {
                throw new Error('Identification failed');
           
            }
            // creer un user pour securiser
            const userSecure = {
                id: rows[0].id,
                username: rows[0].user_name,
                email: rows[0].email,
                bookmarks: rows[0].bookmarks
            }
            console.log(userSecure);
            //renvoyer le user
            
            return userSecure;
            

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
            //console.log('jes suis dans le model', user);
            const password = await bcrypt.hash(this.password, 10);
            const {rows} = await client.query('INSERT INTO "user" (email, password, user_name, role_id) VALUES ($1, $2, $3, $4) RETURNING id', [
                this.email,
                password,
                this.username,
                //id du rôle par défaut (utilisateur)
                1
            ]);
            // creer un user pour securiser
            const userSecure = {
                id: rows[0].id,
                username: this.username,
                email: this.email
            }
            
            return userSecure;          
        } catch (error) {
            //voir l'erreur en console
            console.trace(error);
            //renvoyer l'erreur au front
            throw new Error(error.detail ? error.detail : error.message);
        }
    }
    async deleteUserById(id) {
        try {
            // TODO verifier si l'utilisateur connecté est celui qui peut supprimer
            //const { rows } = await client.query(`SELECT * FROM "user" WHERE id=(SELECT id FROM "user" WHERE email = $1);`, [this.email]); //this vient du constructeur

            //si pas de correspondance on renvoie une erreur
            //if (!rows[0]) {
                //throw new Error('Identification failed');
            //}
            await client.query('DELETE FROM "user" WHERE id =$1', [id])
        } catch (error) {
            //voir l'erreur en console
            console.trace(error);
            //renvoyer l'erreur au front
            throw new Error(error.detail ? error.detail : error.message);
        }
    }

async update() {
        try {
            //bcrypt sur le password
            const passwordCrypted = await bcrypt.hash(this.password, 10);
            this.password = passwordCrypted;
            console.log('nouveau this: ',this);
            
            //updater l'enregistrement 
            await client.query('SELECT update_user($1)', [this]);

        } catch (error) {
            console.log('Erreur SQL', error.detail);
            //relancer l'erreur pout que le controller puisse l'attrapper et la renvoyer au front
            throw new Error(error.detail ? error.detail : error.message);
        }
    }
}

module.exports = User;