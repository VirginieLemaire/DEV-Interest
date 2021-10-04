-- Deploy devinterest:unaccent-configuration to pg

BEGIN;

-- Ajouter l'extension unaccent
CREATE EXTENSION IF NOT EXISTS "unaccent";
--créer la configuration des règles pour un dico fr et french
CREATE TEXT SEARCH CONFIGURATION fr ( COPY = french );

--modifier la configuration
ALTER TEXT SEARCH CONFIGURATION fr
        ALTER MAPPING FOR hword, hword_part, word
        WITH unaccent, french_stem;


COMMIT;
