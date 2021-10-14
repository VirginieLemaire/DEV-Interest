-- Revert devinterest:function_update_user from pg

BEGIN;

--delete update a user
DROP FUNCTION update_user;

--SET DEFAULT sur role_id
ALTER TABLE "user" ALTER COLUMN role_id SET
NOT NULL;

COMMIT;
