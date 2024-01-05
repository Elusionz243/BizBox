/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

const products = require("./jsons/products.json");
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("products").del();
  await knex("products").insert([...products]);
};
