const express = require("express");
const router = express.Router();
const productController = require("../../controllers/products/productController");

router.get("/", productController.getAllProducts);

module.exports = router;
