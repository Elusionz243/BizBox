/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
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
    table.double("price");
    table.double("cost");
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  knex.schema.dropTableIfExists("products");
};
