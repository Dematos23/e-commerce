const { Router } = require("express");
const ProductsController = require("../controllers/products.controller");

const productsRouter = Router();

productsRouter
  .route("/products")
  .post(ProductsController.post)
  .get(ProductsController.get)
  .put(ProductsController.put);

module.exports = productsRouter;
