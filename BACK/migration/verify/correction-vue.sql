-- Verify devinterest:correction-vue on pg

BEGIN;

SELECT * FROM cards WHERE false;

ROLLBACK;
