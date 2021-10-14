-- Deploy devinterest:function_update_user to pg

BEGIN;

--update a user
CREATE OR REPLACE FUNCTION update_user(data json) RETURNS void AS $$
	UPDATE "user" SET 
        email=data->>'email',
        user_name=data->>'username',
        "password"=data->>'password',
        updateat=(now())::TIMESTAMPTZ
    WHERE id=(data->>'id')::INT
$$ LANGUAGE SQL STRICT;

--SET DEFAULT sur role_id
ALTER TABLE "user" ALTER COLUMN role_id
SET DEFAULT 1;

COMMIT;
