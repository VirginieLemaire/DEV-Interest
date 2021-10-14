-- Deploy devinterest:view-user-bookmarks to pg

BEGIN;

-- Add bookmarks'id to users informations when sent to client.
CREATE VIEW user_bookmarks AS
SELECT 
	"user".*, 
	ARRAY_AGG(user_prefer_card.card_id) bookmarks
FROM "user"
	JOIN user_prefer_card ON user_prefer_card.user_id = "user".id
	GROUP BY "user".id
;

COMMIT;
