# Bienvenue dans la partie API de DEV Interest

L'API sert à gérer les ressources, utilisateurs et favoris et l'application DEV Interest.
Elle fournit également les éléments de sécurité.

## Stack technique

- [NodeJS](https://nodejs.org/en/download/) (v12 ou supérieure)
- [PostgreSQL](https://www.postgresql.org/download/) (v12 ou supérieure)
- [Sqitch](https://sqitch.org/download/) (v1 ou supérieure)
- [Git](https://git-scm.com/downloads)
- un client HTTP capable d'utiliser tous les verbes HTTP d'une API REST

Ces outils sont nécessaires à l'installation et au fonctionnement de l'API  
A installer avant de continuer

## Installation

Dans le terminal, se rendre dans le dossier BACK (racine de l'API), installer les dépendances NPM

```bash
npm install
```

Créer une base de données PostgreSQL et déployer le projet sqitch dessus

```bash
createdb nomDB
sqitch deploy
```

💡 Configurer PostgreSQL (ou fournir les variables d'environnement nécessaires à la connexion) pour que les commandes `creatdb` et `sqitch` puissent s'éxécuter correctement. Sinon passer par les commandes classiques


## Données de démonstration

Afin de mettre en place quelques données de test, lancer la commande :

```bash
psql -d nomDB -f ./data/seed1.sql
```
(faire de même pour les fichiers suivants : `seedcards.sql` **puis** `seed_link_tables.sql`)

💡 si vous n'avez pas configuré PostgreSQL, il faudra ajouter `-U utilisateur_de_la_DB` avant le `-d` !

```bash
psql -U utilisateur_de_la_DB -d nomDB -f ./data/seed1.sql
```

## Lancement

```bash
npm start
```
