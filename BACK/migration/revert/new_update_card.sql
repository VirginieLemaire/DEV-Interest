-- Revert devinterest:new_update_card from pg

BEGIN;

-- on remet la fonction telle qu'elle était au départ
-- update a new card
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
