-- Revert chibi-api:init from pg

BEGIN;

DROP TABLE "order_has_product", "product", "category", "order", "user"; 

COMMIT;
