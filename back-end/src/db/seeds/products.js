/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
let products = require("./jsons/products");

exports.seed = async (knex) => {
  console.log(products);
  await knex("products").del();
  for (let product of products) {
    await knex("products").insert([product]);
  }
};
