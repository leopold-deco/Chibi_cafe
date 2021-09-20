-- Revert chibi-api:init from pg

BEGIN;

DROP TABLE "order_has_product", "product_has_ingredient", "ingredient", "product", "category", "order", "user"; 

COMMIT;
