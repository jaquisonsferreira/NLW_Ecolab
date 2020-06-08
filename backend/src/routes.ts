import express from "express";

import PointsController from "./Controllers/PointsController";
import ItemsController from "./Controllers/ItemsController";

const routes = express.Router();

routes.get("/items", ItemsController.index);
routes.post("/points", PointsController.create);
routes.get("/points", PointsController.index);
routes.get("/points/:id", PointsController.show);

export default routes;
