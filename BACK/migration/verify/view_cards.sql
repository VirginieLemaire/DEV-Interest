-- Verify devinterest:view_cards on pg

BEGIN;

SELECT * FROM cards WHERE false;

ROLLBACK;