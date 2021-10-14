const client = require('../database');
const bcrypt = require('bcrypt');
const {userSchema} = require('../schemas/userSchema');

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
    //login
    async findUser() {
        try {
            //comparer l'email de connexion avec la DB dans la table user
            console.log("** Coucou! Je suis findUser du model User.\nJe compare l'email envoyé par le client avec celui de la DB");
            const { rows } = await client.query(`SELECT * FROM "user" WHERE id=(SELECT id FROM "user" WHERE email = $1);`, [this.email]);//this vient du constructeur
            console.log(rows);
            //stocker l'id trouvé dans la table user
            const id = rows[0].id;
            console.log("J'ai trouvé le user" + id );
            //si pas de réponse => retourner l'erreur
            if (!rows[0].id) {
                console.log("les emails ne correspondent pas, je renvoie l'erreur au client sans préciser la cause pour des raisons de sécurité");
                throw new Error('Identification failed');
            }
            //vérifier que les mots de passe correspondent
            console.log("Maintenant je vérifie que les mots de passe correspondent\n...");
            const isValid = await bcrypt.compare(this.password, rows[0].password);
                if (!isValid) {
                    console.log("ce n'est pas bon, on renvoie une erreur au client sans préciser la raison par sécurité");
                    throw new Error('Identification failed');
                }
            console.log("vérif ok!\n");
            //si user voir s'il a des bookmarks
            //console.log('id trouvé dans la table user: ',id);
            
            console.log("Je cherche à savoir si le user a des favoris");
            
            const bookmarksUser = await client.query(`SELECT * FROM user_bookmarks WHERE id= $1;`, [id]);
            //console.log("Voici ce que j'ai trouvé :");
            //console.log(bookmarksUser.rows);
            if (!bookmarksUser.rows[0]) { //si pas de bookmarks retourner le user sans le tableau bookmarks
                console.log("Cet utilisateur n'est pas présent dans la table bookmarks: je renvoie les infos user au controller");
                // créer un objet user "sécurisé"
                let userSecure = {
                    id: rows[0].id,
                    username: rows[0].user_name,
                    email: rows[0].email,
                    createdAt: rows[0].createat
                };
                console.log(userSecure);
                //renvoyer le user au controller            
                return userSecure;
            } else {
                //sinon retourner user_bookmarks
                console.log("Cet utilisateur est présent dans la table bookmarks: je renvoie les infos user avec le tableau des id des bookmarks au controller");
                // créer un objet user "sécurisé" avec ses bookmarks
                let userSecure = {
                    id: bookmarksUser.rows[0].id,
                    username: bookmarksUser.rows[0].user_name,
                    email: bookmarksUser.rows[0].email,
                    createdAt: rows[0].createat,
                    bookmarks: bookmarksUser.rows[0].bookmarks
                };
                console.log(userSecure);
                //renvoyer le user au controller            
                return userSecure;
            }

        } catch (error) {
            //voir l'erreur en console
            console.trace(error);
            //renvoyer l'erreur au front
            throw new Error(error.detail ? error.detail : error.message);
        }
    }

    async signUp(data) {
        try {
            
            const {email, password, username} = data;
            console.log('<<< Signup-je suis dans le model et je reçois -je vais le valider avec joi- ' ,data);
            // validation de joi
            const result = await userSchema.validate(data);
            console.log('\nSignup-resultat du validate de joi', result);
            if (result.error) {
                console.log("erreur dans le modèle",result.error.details);
                console.log("erreur details message: " ,result.error.message );
                const persError = result.error.message ;
                throw new Error(persError);     
            }
            // hash du password (obligatoire à cause de joi)
            let saltRounds = await bcrypt.genSalt(10);
            let HashedPassword = await bcrypt.hash(password, saltRounds);
            console.log("je hash le password", {HashedPassword});
            const {rows} = await client.query('INSERT INTO "user" (email, password, user_name, role_id) VALUES ($1, $2, $3, $4) RETURNING *', [
                data.email,
                HashedPassword,
                data.username,
                //id du rôle par défaut (utilisateur)
                1
            ]);
            console.log("\n voici le résultat",rows[0]);
                // creer un user pour securiser
                const userSecure = {
                id: rows[0].id,
                username: data.username,
                email: data.email,
                createdAt: rows[0].createat
            }
            console.log("\n et mon user sécurisé qui va être renvoyé au controller", {userSecure});
            
            return userSecure;
            
  
        } catch (persError) {
            //voir l'erreur en console
           console.log("***\ndans le catch du model");
           //console.log(error.message);
            console.log(persError);
            //renvoyer l'erreur au front
            throw new Error(persError);
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
            console.log(">> coucou c'est moi, la méthode update du model");
            //bcrypt sur le password s'il existe
            if (this.password) {
                console.log("update >> --> il y a un password, je le crypte et je remplace celui qui se trouve dans this");
                const passwordCrypted = await bcrypt.hash(this.password, 10);
                this.password = passwordCrypted;
                console.log('update : nouveau this= ',this);
            }
            
            //updater l'enregistrement 
            console.log("update >> je mets à jour les infos en DB");
            console.log('****************');
            const {rows} = await client.query('SELECT * FROM update_user($1)', [this]);
            console.log({rows});
            
            //renvoyer le user mis à jour au client. 
            //voir d'abord s'il a des bookmarks
            //console.log('id trouvé dans la table user: ',id);
            
            console.log("Je cherche à savoir si le user a des favoris");
            
            const bookmarksUser = await client.query(`SELECT * FROM user_bookmarks WHERE id= $1;`, [this.id]);
            //console.log("Voici ce que j'ai trouvé :");
            if (!bookmarksUser.rows[0]) { //si pas de bookmarks retourner le user sans le tableau bookmarks
                console.log("Cet utilisateur n'est pas présent dans la table bookmarks: je renvoie les infos user au controller");
                // créer un objet user "sécurisé"
                let userSecure = {
                    id: this.id,
                    username: rows[0].user_name,
                    email: rows[0].email,
                    createdAt: rows[0].createat
                };
                console.log(userSecure);
                //renvoyer le user au controller            
                return userSecure;
            } else {
                //sinon retourner user_bookmarks
                console.log("Cet utilisateur est présent dans la table bookmarks: je renvoie les infos user avec le tableau des id des bookmarks au controller");
                console.log(bookmarksUser.rows[0]);
                // créer un objet user "sécurisé" avec ses bookmarks
                let userSecure = {
                    id: this.id,
                    username: bookmarksUser.rows[0].user_name,
                    email: bookmarksUser.rows[0].email,
                    createdAt: rows[0].createat,
                    bookmarks: bookmarksUser.rows[0].bookmarks
                };
                console.log(userSecure);
                //renvoyer le user au controller            
                return userSecure;
            }

        } catch (error) {
            console.log('Erreur SQL', error.detail);
            //relancer l'erreur pour que le controller puisse l'attrapper et la renvoyer au front
            throw new Error(error.detail ? error.detail : error.message);
        }
    }
    async userWithBookmarksId() {
        try {
            console.log("\n>>> Yo! on est dans le model bookmarks. Voyons ce que j'ai instancié : ");
            console.log(this);

            console.log(">> récupérons les infos du user.........");
            const {rows} = await client.query('SELECT * FROM "user" WHERE id=$1', [this.userId]);
            console.log("résultat de la requête DB user",rows);
            console.log("\n>> Je crée un nouvel objet userSecure avec les infos correspondant à ce qui est utile au client:");
            let userSecure = {
                id: this.userId,
                username: rows[0].user_name,
                email: rows[0].email,
                createdAt: rows[0].createat
            };
            console.log(userSecure);
                        
            console.log("\n>> ??? Je cherche à savoir si le user a des favoris ???\n");

            const bookmarksUser = await client.query(`SELECT * FROM user_bookmarks WHERE id= $1;`, [this.userId]);
            //console.log("Voici ce que j'ai trouvé :");
            if (!bookmarksUser.rows[0]) { //si pas de bookmarks retourner le user sans le tableau bookmarks
                console.log(">> Cet utilisateur n'est pas présent dans la vue bookmarks: je renvoie les infos user au controller");
                //renvoyer le user au controller            
                return userSecure;
            } else {
                //sinon retourner user_bookmarks
                console.log(">> Cet utilisateur est présent dans la vue bookmarks: j'atoute le tableau des id des bookmarks à userSecure et j'en envoi user Secure au controller\n");
                //console.log(bookmarksUser.rows[0]);
                userSecure.bookmarks = bookmarksUser.rows[0].bookmarks;
                //console.log(userSecure);
                //renvoyer le user au controller            
                return userSecure;
            }
        } catch (error) {
            console.trace(error);
        }
    }
    
}

module.exports = User;