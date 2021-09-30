-- Revert devinterest:function_update_user from pg

BEGIN;

-- XXX Add DDLs here.
DROP FUNCTION update_user;

COMMIT;
