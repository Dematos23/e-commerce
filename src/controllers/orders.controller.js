const OrdersService = require("../services/orders.service");

class OrdersController {
  static async post(req, res) {
    try {
      const order = await OrdersService.post(req.body);
      res.status(200).json(order);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async get(req, res) {
    try {
      const orders = await OrdersService.get(req.body);
      res.status(200).json(orders);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async put(req, res) {
    try {
      const order = await OrdersService.put(req.body);
      res.status(200).json(order);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = OrdersController;
