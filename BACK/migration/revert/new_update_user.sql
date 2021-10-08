-- Revert devinterest:new_update_user from pg

BEGIN;

-- on remet l'ancienne version
CREATE OR REPLACE FUNCTION update_user(data json) RETURNS void AS $$
	UPDATE "user" SET 
        email=data->>'email',
        user_name=data->>'username',
        "password"=data->>'password',
        updateat=(now())::TIMESTAMPTZ
    WHERE id=(data->>'id')::INT
$$ LANGUAGE SQL STRICT;

COMMIT;
