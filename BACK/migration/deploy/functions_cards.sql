-- Deploy devinterest:functions_cards to pg

BEGIN;

-- create a new card
CREATE FUNCTION new_card(TEXT,TEXT,TEXT,TEXT,TEXT,TEXT,INT,INT,INT,INT,INT) RETURNS INT AS $$
	INSERT INTO card (title,slug,website,description,url_image,url,user_id,level_id,language_id,type_id,category_id) values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11) RETURNING id;
$$ LANGUAGE SQL STRICT;
-- update a new card
CREATE FUNCTION update_card(TEXT,TEXT,TEXT,TEXT,TEXT,TEXT,INT,INT,INT,INT,INT, INT) RETURNS void AS $$
	UPDATE card SET title= $1,slug=$2,website=$3,description=$4,url_image=$5,url=$6,user_id=$7,level_id=$8,language_id=$9,type_id=$10,category_id=$11 WHERE id=$12;
$$ LANGUAGE SQL STRICT;

COMMIT;
