BEGIN;
DROP TABLE IF EXISTS 
    card_has_category, 
    user_prefer_card, 
    card_has_tech, 
    "role", 
    "level", 
    "language", 
    "type", 
    "user", 
    "card", 
    "tech", 
    "category"
;

CREATE TABLE "role"(
	id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	"role" TEXT NOT NULL UNIQUE DEFAULT 'utilisateur',
	createAt TIMESTAMPTZ NOT NULL DEFAULT NOW(),
	updateAt TIMESTAMPTZ
);

CREATE TABLE "level"(
   	 id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  	 "name" TEXT NOT NULL UNIQUE,
  	 createAt TIMESTAMPTZ NOT NULL DEFAULT NOW(),
   	 updateAt TIMESTAMPTZ
);

CREATE TABLE "language"(
	id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	"name" TEXT NOT NULL UNIQUE,
	createAt TIMESTAMPTZ NOT NULL DEFAULT NOW(),
	updateAt TIMESTAMPTZ
);

CREATE TABLE "type"(
	id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	"type" TEXT NOT NULL UNIQUE,
	createAt TIMESTAMPTZ NOT NULL DEFAULT NOW(),
	updateAt TIMESTAMPTZ
);

CREATE TABLE "user"(
	id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	"user_name" TEXT NOT NULL UNIQUE,
	email TEXT NOT NULL UNIQUE,
	"password" TEXT NOT NULL,
	createAt TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updateAt TIMESTAMPTZ,
	role_id  INTEGER NOT NULL REFERENCES role(id)
);
CREATE TABLE "tech"(
	id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	"name" TEXT NOT NULL UNIQUE,
	color TEXT NOT NULL,
	createAt TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updateAt TIMESTAMPTZ
);

CREATE TABLE "category"(
	id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	"name" TEXT NOT NULL UNIQUE,
	"description" TEXT NOT NULL,
	createAt TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updateAt TIMESTAMPTZ
);

CREATE TABLE "card"(
	id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	title TEXT NOT NULL,
	slug TEXT,
	website TEXT,--pas de contrainte NOT NULL car il peut s'agir uniquement d'une image (avec uniquement une URL)
	"description" TEXT NOT NULL,
	"url_image" TEXT NOT NULL,
	"url" TEXT NOT NULL UNIQUE,
	createAt TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updateAt TIMESTAMPTZ,
    "user_id" INT NOT NULL REFERENCES "user"(id),
	level_id INTEGER NOT NULL REFERENCES level(id),
	language_id INTEGER NOT NULL REFERENCES language(id),
	"type_id" INTEGER NOT NULL REFERENCES type(id),
	category_id INTEGER NOT NULL REFERENCES "category"(id)
);

CREATE TABLE card_has_tech(
	id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	"card_id" INTEGER NOT NULL REFERENCES "card"("id")  ON DELETE CASCADE,
	"tech_id" INTEGER NOT NULL REFERENCES "tech"("id")  ON DELETE CASCADE, 
	"created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW()
);   
CREATE TABLE card_has_category(
	id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	"card_id" INTEGER NOT NULL REFERENCES "card"("id")  ON DELETE CASCADE,
	"category_id" INTEGER NOT NULL REFERENCES "category"("id")  ON DELETE CASCADE, 
	"created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
	
CREATE TABLE user_prefer_card(
	 id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
     "user_id" INTEGER NOT NULL REFERENCES "user"("id") ON DELETE CASCADE,
	 "card_id" INTEGER NOT NULL REFERENCES "card"("id") ON DELETE CASCADE,
	 "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
 
    
COMMIT;