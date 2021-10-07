-- Deploy devinterest:return-update-user to pg

BEGIN;

DROP FUNCTION IF EXISTS update_user ;
--ajouter un retour d'un table pour envoi au client
CREATE OR REPLACE FUNCTION update_user(data json) 
RETURNS TABLE(
	email TEXT,
	user_name TEXT,
	createat TIMESTAMPTZ
) 
AS $$
	UPDATE "user" SET email=COALESCE(data->>'email', email) WHERE "id"=(data->>'id')::INT;
	UPDATE "user" SET user_name=COALESCE(data->>'username', user_name) WHERE id=(data->>'id')::INT;
	SELECT createat from "user" WHERE id=(data->>'id')::INT;
	UPDATE "user" SET  "password"=COALESCE(data->>'password','password') WHERE id=(data->>'id')::INT;
	UPDATE "user" SET updateat=(now())::TIMESTAMPTZ WHERE id=(data->>'id')::INT 
	RETURNING email, user_name,createat
$$ LANGUAGE SQL;


COMMIT;
