// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

const { DB_DATABASE, DB_USER, DB_PASSWORD, DB_PORT } = process.env;

console.log(process.env);

module.exports = {
  development: {
    client: "pg",
    connection: {
      database: DB_DATABASE,
      user: DB_USER,
      password: DB_PASSWORD,
      port: DB_PORT,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: "./src/db/migrations",
    },
    seeds: {
      directory: "./src/db/seeds",
    },
  },
};
