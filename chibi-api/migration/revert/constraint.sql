-- Revert chibi-api:constraint from pg

BEGIN;

DROP DOMAIN "mail", "password", "phone_number", "zip_code", "posint", "strict_posint";

COMMIT;
