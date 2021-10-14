-- Revert devinterest:return-update-user from pg

BEGIN;

DROP FUNCTION IF EXISTS update_user ;
--remettre comme dans la migration précédente
CREATE OR REPLACE FUNCTION update_user(data json) RETURNS void AS $$
	UPDATE "user" SET 
        email=COALESCE(data->>'email', email),
        user_name=COALESCE(data->>'username', user_name),
        password=COALESCE(data->>'password', password),
        updateat=(now())::TIMESTAMPTZ
    WHERE id=(data->>'id')::INT
$$ LANGUAGE SQL STRICT;

COMMIT;
