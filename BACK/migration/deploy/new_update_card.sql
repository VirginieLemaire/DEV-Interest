-- Deploy devinterest:new_update_card to pg

BEGIN;

-- Amélioration de la fonction d'update de carte
--en utilisant COALESCE on choisi d'utiliser soit la data envoyée par le client, soit l'existant en DB
CREATE OR REPLACE FUNCTION update_card(data json) RETURNS void AS $$
	UPDATE card SET 
        title=COALESCE(data->>'title', title),
        slug=COALESCE(data->>'slug', slug),
        website=COALESCE(data->>'website', website),
        description=COALESCE(data->>'description', description),
        url_image=COALESCE(data->>'url_image', url_image),
        url=COALESCE(data->>'url', url),
        user_id=COALESCE((data->>'user_id')::INT, user_id),
        level_id=COALESCE((data->>'level_id')::INT,level_id),
        language_id=COALESCE((data->>'language_id')::INT, language_id),
        type_id=COALESCE((data->>'type_id')::INT, type_id),
        category_id=COALESCE((SELECT id FROM category WHERE name = (data->>'category')), category_id),
        updateat=(now())::TIMESTAMPTZ
    WHERE id=(data->>'id')::INT
$$ LANGUAGE SQL STRICT;

COMMIT;
