-- Deploy devinterest:functions_add_card to pg

BEGIN;

-- create a new card
CREATE OR REPLACE FUNCTION new_card(data json) RETURNS INT AS $$
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

--pour les tables de liaison

CREATE OR REPLACE FUNCTION card_category(data json) RETURNS INT AS $$
INSERT INTO card_has_category (card_id, category_id)
	VALUES (
	  (data->>'id')::INT,
	  (data->>'category_id')::INT    
	)
RETURNING id
$$ LANGUAGE SQL STRICT;

COMMIT;
