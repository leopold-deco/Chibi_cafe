-- Deploy chibi-api:wishlist to pg

BEGIN;

CREATE TABLE "user_wish_product" (
    "user_id" INT REFERENCES "user"(id) ON DELETE CASCADE,
    "product_id" INT REFERENCES"product"(id) ON DELETE CASCADE
);

COMMIT;
