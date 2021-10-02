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
            //1) mise à jour des champs "hors techno"
            //2) boucler comparer les technos envoyées pour cette carte aux associations card_has_tech existantes
            //3) selon le cas mettre à jour, ajouter ou supprimer une ou plusieurs associations
            if (this.id) { //alors c'est un update
                console.log('cest un update, je vérifie que le user est bien contributeur');
                //vérifier que l'id est bien celui du contributeur
                if (this.id === request.userId) {
                    console.log('le user est bien contributeur, il a le droit d\'update');
                    //update card avec la fonction update_card qui fait l'objet d'une migration sqitch
                    await client.query('SELECT update_card($1)', [this]);
                    //update card_has_categorie
                    await client.query('SELECT update_card_category($1)', [this]);
                    //update card_has_tech
                    // ! avec sanitize, la liste des technos n'est plus au bon format, il faut le repasser en array
                    let techsList = this.techs;
                    let techsToArray = techsList.split(",");
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
                    return ("carte mise à jour");
                } else {
                    console.log('le user n\'est pas contributeur, pas le droit d\'update');
                    //envoi de l'info au front
                    throw new Error("Vous n'avez pas l'autorisation de modifier cette carte");
                }

            } else { //sinon c'est un Insert
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
            }
        } catch (error) {
            console.log('Erreur SQL', error.detail);
            //relancer l'erreur pout que le controller puisse l'attrapper et la renvoyer au front
            throw new Error(error.detail ? error.detail : error.message);
        }
    }
}

module.exports = Contributor;