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
    //mettre à jour une carte
    async update() {
        try {
            //vérifier que la personne qui souhaite faire la modif est bien celle qui a créé la carte
            console.log("je vérifie que la personne qui souhaite faire la modif est bien celle qui a ajouté la ressource");
            // recherche de l'id de l'utilisateur
            const contributorId = await client.query('SELECT user_id FROM card WHERE id =$1', [id_card]);
            console.log('je suis dans le model et je consulte ce qui a été envoyé par le client: ',this);
            console.log({contributorId});
            
            //si l'utilisateur n'est pas le contributeur
            if (this.id !== contributorId) {
                throw new Error("Vous n'avez pas l'autorisation de modifier cette carte");
            } else { 
                console.log('le user est bien contributeur, il a le droit d\'update');
                //1) mise à jour des champs "hors techno"

                //update card avec la fonction update_card qui a fait l'objet d'une migration sqitch
                await client.query('SELECT update_card($1)', [this]);
                //update card_has_categorie
                await client.query('SELECT update_card_category($1)', [this]);
                //2) comparer les technos envoyées pour cette carte aux associations card_has_tech existantes
                //préparer le terrain...
                // ! avec sanitize, la liste des id de technos n'est plus au bon format, il faut le repasser en array
                let techsList = this.techs;
                let techsToArray = techsList.split(",");
                /* solution 1 : si le front peut nous envoyer ce qui a été ajouté et ce qui a été supprimé : on agit en fonction du résultat
                -> DELETE FROM card_has_tech WHERE tech_id= $1 
                -> SELECT update_card_tech($1)*/ 
                /* solution 2 : récupérer la liste des associations correspondant à la carte et comparer ce qui a été renvoyé */
                const cardAssociations = await client.query('SELECT id FROM card_has_tech WHERE card_id = $1', [this.id]);
                console.log(cardAssociations);
                /*
                //boucler sur toutes les technos
                for (let tech of techsToArray) {  
                    //TODO : comparer l'existant DB et this pour mettre à jour seulement celui qu'on ne trouve pas
                    //aller chercher les différents id dans la table card_has_tech pour checker quelle association a potentiellement été modifiée.
                    const {rows} = await client.query('SELECT id FROM card_has_tech WHERE card_id = $1 AND tech_id= $2', [this.id, tech]);
                    console.log(rows[0]);
                    //UPDATE uniquement l'association qui ne matche pas
                    if (!rows[O]) {
                        console.log('ok pas trouvé donc mis à jour');
                        const association = {
                            id : rows[0].id,
                            card_id : this.id,
                            tech_id: tech
                        }
                        await client.query('SELECT update_card_tech($1)', [association]);
                    } else {
                        console.log('pas de changement');
                    }
                }
                return ("carte mise à jour"); */
                //3) selon le cas mettre à jour, ajouter ou supprimer une ou plusieurs associations

            }
        } catch (error) {
            console.log('Erreur SQL', error.detail);
            //relancer l'erreur pour que le controller puisse l'attrapper et la renvoyer au front
            throw new Error(error.detail ? error.detail : error.message);
        }
    }
}

module.exports = Contributor;