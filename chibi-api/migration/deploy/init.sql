-- Deploy chibi-api:init to pg

BEGIN;

CREATE TABLE "user" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "mail" TEXT NOT NULL UNIQUE,
    "password" TEXT NOT NULL UNIQUE,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "gender" BOOLEAN NOT NULL,
    "birthday_date" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,
    "roles" BOOLEAN NOT NULL DEFAULT FALSE,
    "street_number" TEXT NOT NULL,
    "name_of_the_road" TEXT NOT NULL,
    "postal_code" TEXT NOT NULL,
    "city" TEXT NOT NULL
);

CREATE TABLE "order" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "number" TEXT NOT NULL UNIQUE,
    "order_date" TIMESTAMPTZ DEFAULT NOW(),
    "delivery_date" TIMESTAMPTZ,
    "total_without_taxes" FLOAT NOT NULL,
    "status" TEXT NOT NULL DEFAULT "En cours",
    "delivery_street_number" TEXT NOT NULL,
    "delivery_name_of_the_road" TEXT NOT NULL,
    "delivery_postal_code" TEXT NOT NULL,
    "delivery_city" TEXT NOT NULL,
    "user_id" INT REFERENCES "user"(id)
);

CREATE TABLE "category" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "category_name" TEXT NOT NULL UNIQUE,
    "category_picture" TEXT,
    "state" BOOLEAN NOT NULL
);

CREATE TABLE "product" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "number" TEXT NOT NULL UNIQUE,
    "type_of_product" BOOLEAN NOT NULL,
    "product_name" TEXT NOT NULL,
    "product_picture" TEXT,
    "description" TEXT,
    "price_without_taxes" FLOAT,
    "taxe" FLOAT DEFAULT 5.5,
    "stock" INT,
    "category_id" INT REFERENCES "category"(id)
);

-- CREATE TABLE "ingredient" (
--     "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
--     "name" TEXT NOT NULL UNIQUE
-- );

-- CREATE TABLE "product_has_ingredient" (
--     "product_id" INT REFERENCES "product"(id),
--     "ingredient_id" INT REFERENCES "ingredient"(id)
-- );

CREATE TABLE "order_has_product" (
    "order_id" INT REFERENCES "order"(id),
    "product_id" INT REFERENCES"product"(id),
    "quantiy" INT NOT NULL
);


COMMIT;
