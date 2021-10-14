-- Deploy devinterest:function_add_card_to_bookmarks to pg

BEGIN;

-- add a new card to user's bookmarks.
CREATE OR REPLACE FUNCTION user_card(data json) RETURNS INT AS $$
INSERT INTO user_prefer_card (card_id, user_id)
VALUES (
(data->>'id')::INT,
(data->>'user_id')::INT
)
RETURNING id
$$ LANGUAGE SQL STRICT;

COMMIT;
