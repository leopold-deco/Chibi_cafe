-- Verify chibi-api:init on pg

BEGIN;

SELECT * FROM "user" WHERE false;

SELECT * FROM "order" WHERE false;

SELECT * FROM "category" WHERE false;

SELECT * FROM "product" WHERE false;

-- SELECT * FROM "ingredient" WHERE false;

-- SELECT * FROM "product_has_ingredient" WHERE false;

SELECT * FROM "order_has_product" WHERE false;

ROLLBACK;
