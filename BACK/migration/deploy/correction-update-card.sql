-- Deploy devinterest:correction-update-card to pg

BEGIN;

-- correction : l'id de card est stockée dans card-id et non pas id dans l'objet data (l'id est celui du user)
-- on en profite pour rajouter un retour des infos mises à jour
--comme le type de retour change il faut d'abord supprimer la fonction
DROP FUNCTION update_card;

CREATE OR REPLACE FUNCTION update_card(data json) RETURNS TABLE (title TEXT, slug TEXT, website TEXT, description TEXT, url_image TEXT, url TEXT, user_id INT, level_id INT, language_id INT, type_id INT, category_id INT, updateat TIMESTAMPTZ) 
AS $$
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
    WHERE id=(data->>'card_id')::INT
	RETURNING title, slug, website, description, url_image, url, user_id, level_id, language_id, type_id, category_id, updateat
$$ LANGUAGE SQL STRICT;

COMMIT;
