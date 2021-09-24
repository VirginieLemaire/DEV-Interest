-- Deploy devinterest:functions_cards to pg

BEGIN;

-- create a new card
CREATE FUNCTION new_card(data json) RETURNS INT AS $$
  INSERT INTO card (title,slug,website,description,url_image,url,user_id,level_id,language_id,type_id,category_id)
    VALUES (
      data->>'title',
      data->>'slug',
      data->>'website',
      data->>'description',
      data->>'url_image',
      data->>'url',
      (data->>'user_id')::INT,
      (data->>'level_id')::INT,
      (data->>'language_id')::INT,
      (data->>'type_id')::INT,
      (data->>'category_id')::INT    
    ) RETURNING id
$$ LANGUAGE SQL STRICT;

-- update a new card
CREATE FUNCTION update_card(data json) RETURNS void AS $$
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

BEGIN;




COMMIT;