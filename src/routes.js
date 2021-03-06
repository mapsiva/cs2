const express = require("express");
const cors = require("cors");
const MovieController = require("./controllers/MovieController");
const GenreController = require("./controllers/GenreController");
const UserController = require("./controllers/UserController");

const routes = express.Router();

routes.use(cors());

routes.post("/movies", MovieController.store);
routes.get("/movies", MovieController.index);
routes.put("/movies/:id", MovieController.update);
routes.delete("/movies/:id", MovieController.delete);

routes.post("/genres", GenreController.store);
routes.get("/genres", GenreController.index);
routes.put("/genres/:id", GenreController.update);
routes.delete("/genres/:id", GenreController.delete);

routes.post("/users", UserController.store);
routes.get("/users", UserController.index);
routes.put("/users/:id", UserController.update);
routes.delete("/users/:id", UserController.delete);

routes.post("/login", UserController.login);

module.exports = routes;
