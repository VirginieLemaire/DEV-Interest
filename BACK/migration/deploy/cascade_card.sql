-- Deploy devinterest:cascade_card to pg

BEGIN;

--ALTER TABLE ADD ON DELETE CASCADE CONSTRAINT
ALTER TABLE card
  DROP CONSTRAINT card_user_id_fkey,
  ADD CONSTRAINT card_user_id_fkey
 	FOREIGN KEY (user_id)    
	REFERENCES "user"(id)    
	ON DELETE CASCADE;

COMMIT;
