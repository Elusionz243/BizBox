require("dotenv").config();
const { DB_DATABASE, DB_HOST, DB_PASSWORD, DB_PORT } = process.env;

module.exports = {
  development: {
    client: "postgresql",
    connection: {
      host: DB_HOST,
      database: DB_DATABASE,
      user: "postgres",
      password: DB_PASSWORD,
      port: DB_PORT,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
      directory: `./src/db/migrations`,
    },
    seeds: {
      directory: `./src/db/seeds`,
    },
  },
};
