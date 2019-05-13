DROP TABLE IF EXISTS cookbooks;
DROP TABLE IF EXISTS recipes;


CREATE TABLE recipes (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  instructions TEXT,
  image_url TEXT,
  youTube_link TEXT,
  FOREIGN KEY (cookbooks_id) REFERENCES cookbooks (id)
);

CREATE TABLE cookbooks (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100)
)