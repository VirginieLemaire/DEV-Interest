-- Revert devinterest:functions_cards from pg

BEGIN;

DROP FUNCTION update_card;
DROP FUNCTION new_card;

COMMIT;
