-- Revert devinterest:cascade_card from pg

BEGIN;


ALTER TABLE card
  DROP CONSTRAINT card_user_id_fkey,
  ADD CONSTRAINT card_user_id_fkey
 	FOREIGN KEY (user_id)    
	REFERENCES "user"(id);

COMMIT;
