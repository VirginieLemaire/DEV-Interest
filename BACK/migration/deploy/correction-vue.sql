-- Deploy devinterest:correction-vue to pg

BEGIN;

DROP VIEW cards;
-- add DISTINCT constraint.
CREATE VIEW cards AS
SELECT DISTINCT
	card.id, 
	card.title, 
	slug,
	website, 
	url_image AS image, 
	card.description, 
	category.name AS category, 
	level.name AS level, 
	type.type, 
	url, 
	user_name AS contributor,
	"user".id AS user_id,
	"language".name AS lang,
	card.createat AS createdAt,
	card_id_techs.techs AS techs --card_id_techs est une vue permettant d'avoir ici les noms des techs (pour le front)
FROM card
		JOIN category ON category.id = card.category_id
		JOIN "level" ON "level".id = card.level_id
		JOIN "type" ON "type".id = card.type_id
		JOIN "user" ON "user".id = card.user_id
		JOIN "language" ON "language".id = card.language_id
		JOIN card_has_tech ON card_has_tech.card_id = card.id
		JOIN card_id_techs ON card_id_techs.id = card.id
ORDER BY card.createat DESC;

COMMIT;
