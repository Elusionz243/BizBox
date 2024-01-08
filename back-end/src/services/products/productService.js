const knex = require("../../db/db.js");

const getAllProducts = async () => await knex("products").select();

const getAllProductsByCategory = async (category) =>
  await knex("products").where("category", category).select();

const getProductById = async (productId) =>
  await knex("products").where("product_id", productId).first();

const createProduct = async (product) => await knex("products").insert(product);

module.exports = {
  getAllProducts,
  getAllProductsByCategory,
  getProductById,
  createProduct,
};
