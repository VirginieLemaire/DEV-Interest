-- Revert devinterest:view_cards from pg

BEGIN;

DROP VIEW cards;

COMMIT;