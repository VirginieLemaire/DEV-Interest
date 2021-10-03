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
            console.log("je suis dans le modèle et voici l'objet instancié this: ", this);
            //vérifier que la personne qui souhaite faire la modif est bien celle qui a créé la carte
            console.log("je vérifie que la personne qui souhaite faire la modif est bien celle qui a ajouté la ressource");
            // recherche de l'id de l'utilisateur
            const {rows} = await client.query('SELECT user_id FROM card WHERE id =$1', [this.id]);
            
            //si l'utilisateur n'est pas le contributeur
            if (this.id !== rows[0].user_id) {
                throw new Error("Le user pas l'autorisation de modifier cette carte car il ne l'a pas créée");
            } else { 
                console.log('le user est bien contributeur, il a le droit d\'update');
                //1) mettre à jour la carte avec la fonction update_card qui a fait l'objet d'une amélioration de la migration sqitch
                await client.query('SELECT update_card($1)', [this]);
                console.log("la table 'card' a été mise à jour, on passe aux technos associées");
                            
                /* solution 1 en attendant mieux : récupérer la liste des associations correspondant à la carte et comparer ce qui a été renvoyé */
                /* solution 2 : si le front peut nous envoyer ce qui a été ajouté et ce qui a été supprimé : on agit en fonction du résultat
                -> DELETE FROM card_has_tech WHERE tech_id= $1 
                -> SELECT update_card_tech($1)*/ 
                //solution 1
                if (this.techs) {
                    console.log("j'ai une mise à jour à faire sur les technos");
                    //remettre en forme le tableau des id de technos envoyé (=> avec sanitize, le tableau est devenu une string, il faut la repasser en array)
                    let techsToArray = this.techs.split(",");
                    console.log({techsToArray});
                    //console.log(techsToArray.length);
                    //comparer les technos envoyées pour cette carte aux associations card_has_tech existantes
                    console.log("je récupère la liste des associations carte-techno existante en DB");
                    const associations = await client.query('SELECT * FROM card_has_tech WHERE card_id = $1', [this.card_id]);
                    let associationToDelete = associations.rows;
                    console.log({associationToDelete});
                    console.log("je spread les techs envoyées par le client dans un tableau des techs à ajouter dans la table de liaison card_has_tech");
                    let techsToAdd = [...techsToArray];
                    
                    //boucler sur toutes les technos
                    console.log("je boucle sur toutes les technos pour trouver quelle association supprimer et/ou quelle association créer")
                    for (let tech of techsToArray) {  
                        console.log("tech à étudier: " + tech);
                        associationToDelete.find(card => {
                            if (!card) return ("non trouvé");
                            console.log("card's techId: ", card.tech_id);
                            if (card.tech_id === parseInt(tech, 10)) {
                                //l'association existe, je la supprime de la liste des associations (il ne me restera plus que celles à supprimer)
                                associationToDelete.splice(associationToDelete.indexOf(card), 1);
                                //je supprime également la techno de la liste des technos envoyées par le client (il ne ne restera plus que celle à ajouter)
                                techsToAdd.splice(techsToAdd.indexOf(tech), 1);
                            }

                        
                        });
                    }
                    console.log({techsToAdd}, {associationToDelete});
                    //ajouter la tech si le tableau n'est pas vide
                    if (techsToAdd.length > 0) {
                        for (const tech of techsToAdd) {
                            console.log("je veux ajouter " + this.card_id, tech);
                            await client.query('INSERT INTO card_has_tech (card_id,tech_id) VALUES ($1,$2) RETURNING id', [this.card_id, tech]);
                            console.log("ok c'est passé");
                        }
                    }
                    
                    //supprimer une association si le tableau n'est pas vide
                    if (associationToDelete.length > 0) {
                        console.log("il y a une ou plusieurs associations à supprimer...");
                        for (const association of associationToDelete) {
                            await client.query('DELETE FROM card_has_tech WHERE id=$1', [association.id]);
                            console.log(`association ${association.id} supprimée`);
                            
                        }
                    }
                } else {
                    console.log("pas de techno envoyée => pas de mise à jour concernant technos");
                }
                console.log("je cherche la carte mise à jour pour la renvoyer au front");   
                const updatedCard = await client.query('SELECT * FROM cards WHERE id = $1', [this.card_id]);
                return updatedCard.rows[0]; 


            }
        } catch (error) {
            console.log('Erreur SQL', error.detail);
            //relancer l'erreur pour que le controller puisse l'attrapper et la renvoyer au front
            throw new Error(error.detail ? error.detail : error.message);
        }
    }
}

module.exports = Contributor;