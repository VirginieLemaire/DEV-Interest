-- Verify devinterest:view-user-bookmarks on pg

BEGIN;

SELECT * FROM user_bookmarks WHERE false;

ROLLBACK;
