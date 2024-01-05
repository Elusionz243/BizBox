const knex = require("knex");
const config = require("../../knexfile");

const env = process.env.NODE_ENV || "development";
const connection = config[env];

const db = knex(connection);

module.exports = db;
