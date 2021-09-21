-- Revert chibi-api:constraint from pg

BEGIN;

DROP DOMAIN "mail", "password", "phone_number", "zip_code", "url", "posint", "strict_posint";

COMMIT;
