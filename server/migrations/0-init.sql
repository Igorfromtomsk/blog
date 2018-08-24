CREATE TABLE IF NOT EXISTS blog(
  id SERIAL,
  title TEXT,
  text TEXT,
  tags JSON
);