obtain, 11 user, 0N role
role: _role, createdAt, updatedAt
uses, 0N tech, 1N card
tech: _name, color, createdAt, updatedAt

user: _user_name, email, password, createdAt, updatedAt
create, 11 card, ON user
Has, 11 card, 0N level
level: _name, createdAt, updatedAt

prefer, 0N card, 0N user
card: title, slug, website, description, url_image, url, createdAt, updatedAt
spoken, 11 card, 0N language
language: _name, createdAt, updatedAt

category: _name, description, createdAt, updatedAt
defined, 0N category, 11 card
is, 11 card, 0N type
type: type, createdAt, updatedAt