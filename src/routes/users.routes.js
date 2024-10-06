const { Router } = require("express");
const UsersController = require("../controllers/users.controller");

const usersRouter = Router();

usersRouter
  .route("/users")
  .post(UsersController.post)
  .get(UsersController.get)
  .put(UsersController.put);

module.exports = usersRouter;
