-- Verify devinterest:init on pg

BEGIN;

SELECT * FROM "role" WHERE false;
SELECT * FROM "level" WHERE false;
SELECT * FROM "language" WHERE false;
SELECT * FROM "type" WHERE false;
SELECT * FROM "user" WHERE false;
SELECT * FROM "tech" WHERE false;
SELECT * FROM "category" WHERE false;
SELECT * FROM "card" WHERE false;
SELECT * FROM "card_has_tech" WHERE false;

SELECT * FROM "card_has_category" WHERE false;
SELECT * FROM "user_prefer_card" WHERE false;

ROLLBACK;
