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
            console.log("je suis dans le model findContributor et voici l'id user concernée",id);
            const { rows } = await client.query('SELECT * FROM "cards" WHERE user_id=$1 ORDER BY createdAt DESC', [id]);
            //condition pour agir selon que la requête renvoie quelque chose ou non
            if (rows[0]) {
                return rows.map(row => new Contributor(row));
            }
            //console.log('resultat dans le model' ,);
            return rows;

            
        } catch (error) {
            //voir l'erreur en console
            console.trace(error);
            //renvoyer l'erreur au front
            throw new Error(error.detail ? error.detail : error.message);
        }
    }
    async deleteCard() {
        try {
            // recherche de l'id de l'utilisateur
            const contributorId = await client.query('SELECT user_id FROM card WHERE id =$1', [this.user]);
            console.log('dans model',this.user);
            //si l'utilisateur n'est pas le contributeur
            if (this.id !== contributorId.user_id) {
                throw new Error('Identification failed');
            }
            await client.query('DELETE FROM "card" WHERE id =$1', [this.id_card])
        } catch (error) {
            //voir l'erreur en console
            console.trace(error);
            //renvoyer l'erreur au front
            throw new Error(error.detail ? error.detail : error.message);
        }
    }
    async update() {
        try {
            console.log("je suis dans le modèle et voici l'objet instancié this: ", this);
            //vérifier que la personne qui souhaite faire la modif est bien celle qui a créé la carte
            console.log("\n!!!!!  je vérifie que la personne qui souhaite faire la modif est bien celle qui a ajouté la ressource");
            console.log("this card-id c'est quoi bon sang de bois ? ",this.card_id);
            // recherche de l'id de l'utilisateur
            const {rows} = await client.query('SELECT user_id FROM card WHERE id=$1', [this.card_id]);
            //si l'utilisateur n'est pas le contributeur
            if (this.id !== rows[0].user_id) {
                throw new Error("ERREUR : Le user pas l'autorisation de modifier cette carte car il ne l'a pas créée");
            } else { 
                console.log('\nGOOD : le user est bien contributeur, il a le droit d\'update');
                //1) mettre à jour la carte avec la fonction update_card qui a fait l'objet d'une amélioration de la migration sqitch
                const updatedCard = await client.query('SELECT update_card($1)', [this]);
                console.log("\ncarte mise à jour avec la fonction update_card",updatedCard.rows);
                console.log("\nla table 'card' a bien été mise à jour, on passe aux technos associées");
                            
                /*récupérer la liste des associations correspondant à la carte et comparer ce qui a été renvoyé */

                if (this.techs) {
                    console.log("\nj'ai une mise à jour à faire sur les technos");
                    //remettre en forme le tableau des id de technos envoyé (=> avec sanitize, le tableau est devenu une string, il faut la repasser en array)
                    let techsToArray = this.techs.split(",");
                    console.log({techsToArray});
                    //console.log(techsToArray.length);

                    //comparer les technos envoyées pour cette carte aux associations card_has_tech existantes
                    console.log("\nje récupère la liste des associations carte-techno en DB : ");
                    const associations = await client.query('SELECT * FROM card_has_tech WHERE card_id = $1', [this.card_id]);
                    let associationToDelete = associations.rows;
                    console.log(associationToDelete);
                    console.log("\nje spread les techs envoyées par le client dans un tableau des techs à ajouter dans la table de liaison card_has_tech\n");
                    let techsToAdd = [...techsToArray];
                    
                    //boucler sur toutes les technos
                    console.log("je boucle sur toutes les technos pour trouver quelle association supprimer et/ou quelle association créer")
                    for (let tech of techsToArray) {  
                        //console.log("tech à étudier: " + tech);
                        associationToDelete.find(card => {
                            if (!card) return ("\n ERREUR : non trouvé, j'arrête là");
                            //console.log("\ncard's techId: ", card.tech_id);
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
                            console.log("\nje veux ajouter l'association : " + this.card_id, tech);
                            await client.query('INSERT INTO card_has_tech (card_id,tech_id) VALUES ($1,$2) RETURNING id', [this.card_id, tech]);
                            console.log("-> ok c'est passé ;)");
                        }
                    }
                    
                    //supprimer une association si le tableau n'est pas vide
                    if (associationToDelete.length > 0) {
                        console.log("\nil y a une ou plusieurs associations à supprimer...");
                        for (const association of associationToDelete) {
                            await client.query('DELETE FROM card_has_tech WHERE id=$1', [association.id]);
                            console.log(`association ${association.id} supprimée`);
                            
                        }
                    }
                } else {
                    console.log("pas de techno envoyée => pas de mise à jour concernant technos");
                }

                return updatedCard.rows; 


            }
        } catch (error) {
            console.log('Erreur SQL', error.detail);
            //relancer l'erreur pour que le controller puisse l'attrapper et la renvoyer au front
            throw new Error(error.detail ? error.detail : error.message);
        }
    }
}

module.exports = Contributor;