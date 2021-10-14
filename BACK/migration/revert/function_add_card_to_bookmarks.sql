-- Revert devinterest:function_add_card_to_bookmarks from pg

BEGIN;

DROP FUNCTION user_card;

COMMIT;
