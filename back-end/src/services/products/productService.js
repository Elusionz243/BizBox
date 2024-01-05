const knex = require("../../db/db.js");

const getAllProducts = async () => await knex("users").select();

module.exports = {
  getAllProducts,
};
