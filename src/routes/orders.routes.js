const { Router } = require("express");
const OrdersController = require("../controllers/orders.controller");

const ordersRouter = Router();

ordersRouter
  .route("/orders")
  .post(OrdersController.post)
  .get(OrdersController.get)
  .put(OrdersController.put);

module.exports = ordersRouter;
