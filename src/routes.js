const routes = require("express").Router();

const authMiddleware = require("./app/middleware/auth");

const SessionController = require("./app/controllers/SessionController");
const UserController = require("./app/controllers/UserController");

routes.post("/sessions", SessionController.store);

routes.get("/users", UserController.listUsers);
routes.post("/users", UserController.createUser);

routes.use(authMiddleware);

routes.get("/dashboard", (req, res) => {
  return res.status(200).send();
});

module.exports = routes;
