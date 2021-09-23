-- Verify devinterest:bookmarks on pg

BEGIN;

SELECT * FROM cards WHERE false;

ROLLBACK;
