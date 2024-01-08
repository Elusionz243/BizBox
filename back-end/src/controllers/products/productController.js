const productService = require("../../services/products/productService");

const getAllProducts = async (req, res) => {
  try {
    const products = await productService.getAllProducts();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllProductsByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const products = await productService.getAllProductsByCategory(category);
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getProductById = async (req, res) => {
  try {
    const { product_id } = req.params;
    const product = await productService.getProductById(product_id);
    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createProduct = async (req, res) => {
  try {
    const newProduct = req.body;
    const addedProduct = await productService.createProduct(newProduct);
    res.status(201).json(addedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllProducts,
  getAllProductsByCategory,
  getProductById,
  createProduct,
};
