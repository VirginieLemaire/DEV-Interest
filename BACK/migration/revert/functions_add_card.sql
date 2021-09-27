-- Revert devinterest:functions_add_card from pg

BEGIN;

DROP FUNCTION new_card;
DROP FUNCTION card_category;

COMMIT;
