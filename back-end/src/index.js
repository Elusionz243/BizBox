const db = require("./db/db");
const cors = require("cors");
const express = require("express");
const app = express();

const PORT = 8080;

const productRoutes = require("./routes/products/productsRouter");

app.use(cors());
app.use("/products", productRoutes);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
