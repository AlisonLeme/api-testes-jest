const routes = require("express").Router();

const authMiddleware = require("./app/middleware/auth");

const SessionController = require("./app/controllers/SessionController");
const UserController = require("./app/controllers/UserController");
const DisciplineController = require("./app/controllers/DisciplineController");

routes.post("/sessions", SessionController.store);

routes.get("/users", UserController.listUsers);
routes.post("/users", UserController.createUser);

routes.get("/disciplines", DisciplineController.listDisciplines);
routes.post("/disciplines", DisciplineController.createDiscipline);

routes.use(authMiddleware);

routes.get("/dashboard", (req, res) => {
  return res.status(200).send();
});

module.exports = routes;
