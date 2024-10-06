const ProductsService = require("../services/products.service");

class ProductsController {
  static async post(req, res) {
    try {
      const product = await ProductsService.post(req.body);
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async get(req, res) {
    try {
      const products = await ProductsService.get(req.body);
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async put(req, res) {
    try {
      const product = await ProductsService.put(req.body);
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = ProductsController;
