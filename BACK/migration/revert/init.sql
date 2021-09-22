-- Revert devinterest:init from pg

BEGIN;

DROP TABLE IF EXISTS 
    user_prefer_card, 
    card_has_category, 
    card_has_tech, 
    "card", 
    "category",
    "tech", 
    "user", 
    "type", 
    "language", 
    "level", 
    "role"
;

COMMIT;
