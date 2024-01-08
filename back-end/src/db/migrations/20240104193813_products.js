/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) =>
  knex.schema.createTable("products", (table) => {
    table.increments("product_id");
    table.string("brand");
    table.string("product_name");
    table.string("vendor");
    table.string("category");
    table.string("variant");
    table.string("barcode");
    table.string("location");
    table.integer("quantity");
    table.decimal("price", 18, 2);
    table.decimal("cost", 18, 2);
    table.timestamps(true, true);
  });

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => knex.schema.dropTableIfExists("products");
