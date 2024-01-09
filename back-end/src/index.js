const db = require("./db/db");
const cors = require("cors");
const express = require("express");
const app = express();

const productRoutes = require("./routes/products/productsRouter");

app.use(cors());
app.use("/products", productRoutes);

app.listen(3000, () => {
  console.log("App listening on port 3000");
});
