const express = require("express");
const router = express.Router();
const productController = require("../../controllers/products/productController");

router
  .get("/", productController.getAllProducts)
  .post("/", productController.createProduct);
router.get("/:category", productController.getAllProductsByCategory);
router.get("/:product_id", productController.getProductById);

module.exports = router;
