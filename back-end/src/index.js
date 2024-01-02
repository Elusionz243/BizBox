const express = require("express");
const { Pool } = require("pg");

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

const app = express();

app.get("/", (req, res) => {
  pool.query("SELECT * FROM users", (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }

    res.send(result.rows);
  });
});

app.listen(3000, () => {
  console.log("App listening on port 3000");
});
