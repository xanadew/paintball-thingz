CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  auth0_id TEXT,
  email TEXT,
  pictureUrl TEXT,
  name TEXT
);

CREATE TABLE IF NOT EXISTS reviews (
    reviewsid SERIAL PRIMARY KEY,
    id INTEGER,
    reviewname TEXT,
    description TEXT
);



