-- Revert devinterest:unaccent-configuration from pg

BEGIN;

-- supprimer les configurations
DROP TEXT SEARCH CONFIGURATION fr;
DROP EXTENSION "unaccent";

COMMIT;
