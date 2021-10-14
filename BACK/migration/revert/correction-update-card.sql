-- Revert devinterest:correction-update-card from pg

BEGIN;

--comme le type de retour change il faut d'abord supprimer la fonction
DROP FUNCTION update_card;
--on remet la fonction à son état précédent
CREATE OR REPLACE FUNCTION update_card(data json) RETURNS void AS $$
	UPDATE card SET 
        title=data->>'title',
        slug=data->>'slug',
        website=data->>'website',
        description=data->>'description',
        url_image=data->>'url_image',
        url=data->>'url',
        user_id=(data->>'user_id')::INT,
        level_id=(data->>'level_id')::INT,
        language_id=(data->>'language_id')::INT,
        type_id=(data->>'type_id')::INT,
        category_id=(data->>'category_id')::INT
    WHERE id=(data->>'id')::INT
$$ LANGUAGE SQL STRICT; 

COMMIT;
