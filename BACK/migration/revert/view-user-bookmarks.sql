-- Revert devinterest:view-user-bookmarks from pg

BEGIN;

-- suppression de la vue.
DROP VIEW user_bookmarks;

COMMIT;
