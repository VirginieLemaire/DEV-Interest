-- Verify devinterest:view_cards_all_tech on pg

BEGIN;


SELECT * FROM card_id_techs WHERE false;
SELECT * FROM cards WHERE false;

ROLLBACK;
