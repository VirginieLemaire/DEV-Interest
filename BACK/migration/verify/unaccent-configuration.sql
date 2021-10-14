-- Verify devinterest:unaccent-configuration on pg

BEGIN;

-- chercher des éléments avec accent.
select to_tsvector('fr','Hôtels de la Mer') WHERE false;


ROLLBACK;
