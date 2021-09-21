-- Revert chibi-api:seeding_product from pg

BEGIN;

TRUNCATE product, category RESTART IDENTITY CASCADE;

COMMIT;
