-- Deploy devinterest:new_update_user to pg

BEGIN;

-- Amélioration de la fonction d'update de carte
--en utilisant COALESCE on choisi d'utiliser soit la data envoyée par le client, soit l'existant en DB
CREATE OR REPLACE FUNCTION update_user(data json) RETURNS void AS $$
	UPDATE "user" SET 
        email=COALESCE(data->>'email', email),
        user_name=COALESCE(data->>'username', user_name),
        password=COALESCE(data->>'password', password),
        updateat=(now())::TIMESTAMPTZ
    WHERE id=(data->>'id')::INT
$$ LANGUAGE SQL STRICT;

COMMIT;
