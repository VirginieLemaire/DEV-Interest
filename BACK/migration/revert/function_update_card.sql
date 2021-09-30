-- Revert devinterest:function_update_card from pg

BEGIN;

-- XXX Add DDLs here.
DROP FUNCTION update_user;

COMMIT;
