DROP TABLE IF EXISTS recipes;
DROP TABLE IF EXISTS cookbooks;

CREATE TABLE cookbooks (
  id SERIAL PRIMARY KEY,
  nameCookbook VARCHAR(100)
);

CREATE TABLE recipes (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  ingredients TEXT,
  instructions TEXT,
  image TEXT,
  youtubeLink TEXT,
  cookbooks_id INTEGER NOT NULL,
  FOREIGN KEY (cookbooks_id) REFERENCES cookbooks (id)
);

