CREATE TABLE IF NOT EXISTS waitlist (
  id          SERIAL PRIMARY KEY,
  name        TEXT        NOT NULL,
  email       TEXT        NOT NULL UNIQUE,
  phone       TEXT        NOT NULL,
  city        TEXT        NOT NULL,
  horizon     TEXT        NOT NULL,
  whatsapp    BOOLEAN     NOT NULL DEFAULT FALSE,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
