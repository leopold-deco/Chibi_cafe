-- Verify chibi-api:seeding_product on pg

BEGIN;

SELECT id FROM product WHERE id=1;
SELECT id FROM category WHERE id=1;

ROLLBACK;
