-- Deploy devinterest:view_cards to pg

BEGIN;

-- create a view for front-end
CREATE VIEW cards AS
SELECT 
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
	"language".name AS lang,
	card.createat AS createdAt,
	tech.name AS techs
FROM card
		JOIN category ON category.id = card.category_id
		JOIN "level" ON "level".id = card.level_id
		JOIN "type" ON "type".id = card.type_id
		JOIN "user" ON "user".id = card.user_id
		JOIN "language" ON "language".id = card.language_id
		JOIN card_has_tech ON card_has_tech.card_id = card.id
		JOIN tech ON tech.id = card_has_tech.tech_id
ORDER BY card.createat DESC
;

COMMIT;