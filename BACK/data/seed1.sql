BEGIN;
insert into level (name) values 
    ('débutant'),--1
    ('intermédiaire'),--2
    ('expert');--3
insert into category (name, description) values 
    ('Apprendre', 'découvrir et apprendre une nouvelle techno'),--1
    ('Approfondir', 'en plus plus sur une techno'),--2
    ('Entrainement', 'challenges et tutoriels')--3
;

insert into type (type) values 
    ('article'),--1
    ('site entier'),--2
    ('video'),--3
    ('image'),--4
    ('site de challenges')--5
;


insert into tech ("name",color) values 
    ('javascript','black'),--1
    ('Css','blue'),--2
    ('mongodb','green'),--3
    ('PHP', '#f0f')--4
;
insert into role ("role") values 
    ('utilisateur');--1

insert into "user" ("user_name", "email", "password", "role_id") values 
    ('Fred', 'fred@dsf.com', '1234', 1),--1
    ('Virginie', 'mailvirginie', '1234', 1)--2
;   

insert into "language" ("name") values 
    ('français'),--1
    ('anglais')--2
;
COMMIT;